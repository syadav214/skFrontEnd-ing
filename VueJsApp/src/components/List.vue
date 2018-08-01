<style src="../assets/list.css"></style>
<template src='../template/list.html'>
</template>

<script>
/* eslint-disable */
let pageName = 'Posts and Files';

export default {
  name: 'file-list',
  data() {
    return {
      title: pageName,
      results: [],
      files: [],
      loading: false,
      files_to_delete: []
    };
  },
  created() {
    this.$http({
      method: 'GET',
      url: 'http://jsonplaceholder.typicode.com/posts?userId=4'
    }).then(
      result => {
        this.results = result.data;
      },
      error => {
        console.error(error);
      }
    );

    let data = {
      IsTruncated: true,
      Contents: [
        {
          Key: 'SKY/',
          LastModified: '2018-05-31T10:38:11.000Z',
          ETag: '"d41d8cd98f00b204e9800998ecf8427e"',
          Size: 0,
          StorageClass: 'STANDARD'
        },
        {
          Key: 'SKY/YKS_1854080.zip',
          LastModified: '2018-05-31T10:38:11.000Z',
          ETag: '"aa067ef6241b7735aaaa44ba67f34a79"',
          Size: 16618407,
          StorageClass: 'STANDARD'
        },
        {
          Key: 'SKY/YKS_1854485.zip',
          LastModified: '2018-05-31T10:38:12.000Z',
          ETag: '"3e4e0f95783e08fbd9c2e43aad032133"',
          Size: 38726159,
          StorageClass: 'STANDARD'
        },
        {
          Key: 'SKY/YKS_1854981.zip',
          LastModified: '2018-05-31T10:38:13.000Z',
          ETag: '"6b7ee13f912e94e709693c2eee27a2bc"',
          Size: 951383,
          StorageClass: 'STANDARD'
        },
        {
          Key: 'SKY/YKS_1855201.zip',
          LastModified: '2018-05-31T10:38:13.000Z',
          ETag: '"b9479798f4d2165ede533f75933cfdbb"',
          Size: 1974971,
          StorageClass: 'STANDARD'
        },
        {
          Key: 'SKY/YKS_1855313.zip',
          LastModified: '2018-05-31T10:38:13.000Z',
          ETag: '"1680e92053488038a93fc7ceef38e8f6"',
          Size: 190283,
          StorageClass: 'STANDARD'
        },
        {
          Key: 'SKY/YKS_1855518.zip',
          LastModified: '2018-05-31T10:38:13.000Z',
          ETag: '"6cafbda0c28b2083cea993e3c8209bdf"',
          Size: 2061867,
          StorageClass: 'STANDARD'
        },
        {
          Key: 'SKY/YKS_1855542.zip',
          LastModified: '2018-05-31T10:38:14.000Z',
          ETag: '"dcf6d5e3291801ad1a1ae058fbe43d47"',
          Size: 3025076,
          StorageClass: 'STANDARD'
        },
        {
          Key: 'SKY/YKS_1855544.zip',
          LastModified: '2018-05-31T10:38:14.000Z',
          ETag: '"ebf0aa181ef9790269193b09ce58e197"',
          Size: 10868520,
          StorageClass: 'STANDARD'
        },
        {
          Key: 'SKY/YKS_1855787.zip',
          LastModified: '2018-05-31T10:38:14.000Z',
          ETag: '"96317e268e58a948c0368b275f634904"',
          Size: 752328,
          StorageClass: 'STANDARD'
        }
      ],
      Name: 'dev-files-storage',
      Prefix: 'SKY/',
      Delimiter: '/',
      MaxKeys: 10,
      CommonPrefixes: [
        { Prefix: 'SKY/Test Folder 1/' },
        { Prefix: 'SKY/Test Folder 2/' }
      ],
      KeyCount: 10,
      NextContinuationToken: 'fdgfgfgfgfgdfdfdg*&*(&*^&*&*GH'
    };
    let contents = data.Contents;

    contents.shift();
    contents.forEach(element => {
      element.Key = element.Key.replace(data.Prefix, '');
      element.LastModified = new Date(element.LastModified).toUTCString();
    });

    let subFolder = data.CommonPrefixes;
    let isSubFolder = subFolder.length > 0 ? true : false;

    this.files = {
      contents: contents,
      currentFolder: data.Prefix,
      moreFileNextPage: data.IsTruncated,
      subFolder: subFolder,
      isSubFolder: isSubFolder
    };
  },
  methods: {
    deleteSelect(e) {
      let fileExists = this.files_to_delete.find(files => 
        files.filename == e.target.value
      );

      if(fileExists != null && fileExists !='undefined') {
        let index = this.files_to_delete.indexOf(fileExists);
        this.files_to_delete.splice(index,1);
      }

      
      if (e.target.checked) {
        this.files_to_delete.push({ filename: e.target.value });
      }
      console.log(e.target.checked, e.target.value, this.files_to_delete);
    }
  }
};

document.title = pageName;
</script>
