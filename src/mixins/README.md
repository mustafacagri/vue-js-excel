# Vue Js Excel
Easily export your json data to excel or import your excel file to your json data...


![alt text](https://www.mustafacagri.com/wp-content/uploads/2020/11/vue-js-excel.png "Vue Js Excel")

## Usage (Export to Excel)
In your App.vue or another vue file,

```
import {VueJsExcel} from 'VueJsExcel'
export default {
...
name: 'App',
mixins: [VueJsExcel],
...
}
```

Then you can call the VueJsExcel like this wherever you want:
```
this.VueJsExcelExport(this.data, "File Name", this.columns)
```

` data: ` Your data source.

` File Name: ` Your file name. And all blank / space charachters will be replaced with "_" (underscore). Output will be file_name.csv.

` columns: ` Your header columns. columns paramater might be an array or null. If it is null, there will be no headers in your excel file.

## Github
https://github.com/mustafacagri/vue-js-excel

## NPM
```
npm install vue-js-excel
```
 
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```