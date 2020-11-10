<template>
  <div id="app">
    <div class="container-fluid">
      <div class="mainbox"><div class="title withoutline"><i class="fas fa-file-excel"></i> Vue Js Excel: Easily export your json data to excel or import your excel file to your json data...</div></div>
      <div class="row">
        <div class="col-md-8">
          <div class="mainbox">
            <div class="title"><i class="fas fa-table"></i> Demo Table From Json Data</div>
            <div class="content">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th v-for="column in columns" :key="column.id">{{column}}</th>
                  </tr>
                  <tr v-for="row in data" :key="row.id">
                    <td>{{row.id}}</td>
                    <td>{{row.name}}</td>
                    <td>{{row.username}}</td>
                    <td>{{row.email}}</td>
                    <td>{{row.phone}}</td>
                    <td>{{row.website}}</td>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div><!-- col-md-8 -->
        <div class="col-md-4">
          <div class="mainbox">
            <div class="title"><i class="fas fa-download"></i> Download</div>
            <div class="content">
              <button class="btn btn-success" @click="ExcelExport"><i class="fas fa-download"></i> Download Your Excel</button>
            </div>
          </div><!-- mainbox -->
          <div class="mainbox">
            <div class="title"><i class="fas fa-arrow-alt-circle-right"></i> Usage (Export to Excel)</div>
            <div class="content">
              <p>In your <code>App.vue</code> or another vue file, </p>
              <p><code>import {VueJsExcel} from 'VueJsExcel'</code></p>
              <p><code>
                export default {<br>
                <p class="pl-3 mb-0">
                  ...<br />
                  name: 'App',<br />
                  mixins: [VueJsExcel],<br />
                  ...
                </p>
                }
              </code></p>
              <small>Then you can call the VueJsExcel like this wherever you want:</small>

              <p class="mt-2"><mark class="px-2 d-block text-center">this.VueJsExcelExport(this.data, "File Name", this.columns)</mark></p>
              <p class="mt-2"><kbd class="mr-1">data:</kbd> Your data source.</p>
              <p class="mt-2"><kbd class="mr-1">File Name:</kbd> Your file name. And all blank / space charachters will be replaced with "_" (underscore). Output will be <strong>file_name.csv</strong>.</p>
              <p class="mt-2"><kbd class="mr-1">columns:</kbd> Your header columns. <code>columns</code> paramater might be an <code>array</code> or <code>null</code>. If it is null, there will be no headers in your excel file.</p>
            </div>
          </div><!-- mainbox -->
        </div><!-- col-md-4 -->
      </div><!-- row -->
      <hr />
      <div class="row">
        <div class="col-md-8">
          <div class="mainbox">
            <div class="title"><i class="fas fa-table"></i> Demo Table From Excel File</div>
            <div class="content">
              <div v-if="!UploadPartContent">
                After selecting and uploading your excel file on the right side, you will able to see your data in a table here.
              </div>
              <div class="alert alert-danger" v-if="UploadPartContent">This feature is currently under development. This feature will also be included in the next version.</div>
            </div><!-- content -->
          </div><!-- mainbox -->
        </div><!-- col-md-8 -->
        <div class="col-md-4">
          <div class="mainbox">
            <div class="title"><i class="fas fa-upload"></i> Upload</div>
            <div class="content">
              <input type="file" name="file" class="mb-3" />
              <button class="btn btn-danger" @click="UploadPartContent=true"><i class="fas fa-upload"></i> Upload Your Excel</button>
            </div>
          </div><!-- mainbox -->
        </div><!-- col-md-4 -->
      </div><!-- row -->
    </div><!-- container-fluid -->
  </div><!-- app -->
</template>

<script>
import {VueJsExcel} from 'vue-js-excel'
export default {
  name: 'App',
  mixins: [VueJsExcel],
  data(){
    return{
      UploadPartContent: false,
      data: [
        {
          "id": 1,
          "name": "Leanne Graham",
          "username": "Bret",
          "email": "Sincere@april.biz",
          "phone": "1-770-736-8031 x56442",
          "website": "hildegard.org",
        },
        {
          "id": 2,
          "name": "Ervin Howell",
          "username": "Antonette",
          "email": "Shanna@melissa.tv",
          "phone": "010-692-6593 x09125",
          "website": "anastasia.net",
        },
        {
          "id": 3,
          "name": "Clementine Bauch",
          "username": "Samantha",
          "email": "Nathan@yesenia.net",
          "phone": "1-463-123-4447",
          "website": "ramiro.info",
        },
        {
          "id": 4,
          "name": "Patricia Lebsack",
          "username": "Karianne",
          "email": "Julianne.OConner@kory.org",
          "phone": "493-170-9623 x156",
          "website": "kale.biz"
        },
        {
          "id": 5,
          "name": "Chelsey Dietrich",
          "username": "Kamren",
          "email": "Lucio_Hettinger@annie.ca",
          "phone": "(254)954-1289",
          "website": "demarco.info"
        },
        {
          "id": 6,
          "name": "Mrs. Dennis Schulist",
          "username": "Leopoldo_Corkery",
          "email": "Karley_Dach@jasper.info",
          "phone": "1-477-935-8478 x6430",
          "website": "ola.org"
        },
        {
          "id": 7,
          "name": "Kurtis Weissnat",
          "username": "Elwyn.Skiles",
          "email": "Telly.Hoeger@billy.biz",
          "phone": "210.067.6132",
          "website": "elvis.io"
        },
        {
          "id": 8,
          "name": "Nicholas Runolf. V",
          "username": "Maxime_Nienow",
          "email": "Sherwood@rosamond.me",
          "phone": "586.493.6943 x140",
          "website": "jacynthe.com"
        },
        {
          "id": 9,
          "name": "Glenna Reichert",
          "username": "Delphine",
          "email": "Chaim_McDermott@dana.io",
          "phone": "(775)976-6794 x41206",
          "website": "conrad.com"
        },
        {
          "id": 10,
          "name": "Clementina DuBuque",
          "username": "Moriah.Stanton",
          "email": "Rey.Padberg@karina.biz",
          "phone": "024-648-3804",
          "website": "ambrose.net"
        },
        {
          "id": 11,
          "name": "Mustafa Çağrı Güven",
          "username": "mustafacagri",
          "email": "cagri@mustafa.aaa",
          "phone": "090-500-000-00-00",
          "website": "mustafacagri.com"
        },
        {
          "id": 12,
          "name": "Kurtis Weissnat",
          "username": "Elwyn.Skiles",
          "email": "Telly.Hoeger@billy.biz",
          "phone": "210.067.6132",
          "website": "elvis.io"
        }
      ],
      columns: ['Id', 'Name', 'Username', 'Email', 'Phone', 'Website']
    }
  },
  methods:{
    ExcelExport(){
      this.VueJsExcelExport(this.data,"testing 1 2 3",this.columns)
    }
  }
}
</script>

<style scoped>
  .table thead th {border-top:0}
</style>