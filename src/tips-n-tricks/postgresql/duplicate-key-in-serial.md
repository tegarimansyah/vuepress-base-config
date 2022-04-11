---
sidebar: auto
---

# PostgreSQL Duplicate Key in Serial

## Intro

Asumsikan kita memiliki table seperti ini

```sql
CREATE TABLE bank (
	id serial4,
	name varchar(40) NOT NULL,
	bank_code varchar(3) NULL,
	CONSTRAINT bank_pkey PRIMARY KEY (id)
);
```

Dapat kita lihat bahwa kita memiliki auto generated `id` dengan menggunakan tipe data `serial`. Behind the scene, `serial` sebenarnya equivalent dengan `integer NOT NULL DEFAULT nextval('tableName_columnName_seq')` dimana `'table_name_id_seq'` dalam konteks ini adalah `'bank_id_seq'`. Artinya, jika kita memasukan data tanpa `id`, maka default datanya adalah `next value dari sequence bank_id_seq`.

Lalu apa yang terjadi jika kita memasukan `id` secara manual? Hal ini terjadi ketika aku melakukan seeding untuk data tersebut. Aku mengikutsertakan `id` karena pada saat itu command `yarn seed` akan memasukan dummy data dan aku tidak mau melakukan seeding bank beberapa kali dengan data yang sama. Pseudocode nya kurang lebih seperti ini:

```ts
const rows = [
  {
    id: 1,
    name: 'BRI',
    bank_code: '012'
  },
  {
    id: 2,
    name: 'BCA',
    bank_code: '014'
  }
]

await db
  .insertInto('bank')
  .values(rows)
  .execute();
```

Apakah terjadi error? **Tidak**. Namun ketika kita melakukan insert data pada sistem kita, akan terdapat error 

```
ERROR:  duplicate key violates unique constraint
```

Kok bisa? Kan unique constraint hanya `id` dan itu auto generated? Nah disini kita perlu melihat bagaimana `serial` bekerja.

## Solution

Seperti yang telah disebutkan sebelumnya, `DEFAULT nextval('bank_id_seq')` hanya ter trigger ketika kita tidak mengisi kolom `id`. Artinya jika kita mengisi id tersebut, `nextval` tidak akan terpanggil dan `bank_id_seq` tidak akan di increment. Jadi ketika pada seeder kita memasukan id 1 hingga 20, sequence masih mengira id selanjutnya adalah 1 (karena merasa belom pernah dimasukan data). Hal ini dapat dibuktikan dengan command

```sql
SELECT 
(select last_value from bank_id_seq) AS "Current Value",
MAX("id") AS "Max Value" 
FROM bank;


Current Value|Max Value|
-------------+---------+
           1|       20|
```

Solusinya adalah kita perlu melakukan `set value sequence dengan max value + 1`. Kurang lebih seperti ini:

```sql
select setval(
  'bank_id_seq', 
  (select max(id) from bank)
);
```

Dengan memasukan command tersebut pada seeding, maka aplikasi tidak akan terkena error `duplicate key` lagi, karena sequence selanjutnya adalah setelah data yang sudah kita masukan. Atau solusi lain menggunakan `uuid` sebagai `id`.