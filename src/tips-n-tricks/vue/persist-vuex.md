---
sidebar: auto
---

# Persist Vuex

## Intro

Vuex adalah state management yang digunakan pada vue.js. Seperti state management pada umumnya, data akan disimpan pada memory. Masalah akan terjadi jika kita melakukan refresh browser atau tab tidak sengaja tertutup, maka data akan hilang dan kita harus melakukan populate dari awal.

Sebenarnya sudah ada solusi untuk ini seperti [vuex-persist](https://www.npmjs.com/package/vuex-persist), namun kita akan coba membuatnya sendiri agar lebih paham bagaimana ini bisa dilakukan.

## Understanding Vuex Lifecycle

### Minimun

* **Mutations**<br />
  Updating state
  <br />
  <br />
* **State**<br />
  Accessing state as is
  <br />
  <br />

### Extended

* **Actions**<br />
  Wasd
  <br />
  <br />
* **Mutations**<br />
  Wasd
  <br />
  <br />
* **State**<br />
  Wasd
  <br />
  <br />
* **Getters**<br />
  Wasd
  <br />
  <br />

## Solusi 1: LocalStorage

To be added

## Solusi 2: Cookie

To be added