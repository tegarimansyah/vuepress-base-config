<template>
  <div>
    <ul style="margin-bottom:100px">
      <a v-for="page in $site.pages.filter( page => page.relativePath !== 'index.md').sort( (a,b) => (a.lastUpdatedTimestamp < b.lastUpdatedTimestamp) ? 1 : -1 ).slice(0,6)" :key="page.regularPath" :href="page.regularPath">
        <li><span style="font-size:12px">{{ page.lastUpdated }}</span> <br>{{ page.relativePath.split("/")[0] }} / {{ page.title }} </li>
      </a>
    </ul>
  </div>
</template>