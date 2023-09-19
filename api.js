 console.log("JQUERY AJAX");
 const urlBacon = "https:jsonplaceholder.typicode.com/posts/1";
 (function() {
     $.ajax({
             method: "GET",
             url: urlBacon,
             dataType: "json"
         })
         .done(function(data) {
             console.log(data);
         })
         .fail(function() {
             alert("no good");
         });
 })()

 $.ajax({
         url: "https:jsonplaceholder.typicode.com/posts/1",
         beforeSend: function(xhr) {
             xhr.overrideMimeType("text/plain; charset=x-user-defined");
         }
     })
     .done(function(data) {
         if (console && console.log) {
             console.log("Sample of data:", data.slice(0, 100));
         }
     });

 console.log("XMLHttpRequest RESTful GET");
 var url = "https:jsonplaceholder.typicode.com/posts/100";
 var xhr = new XMLHttpRequest()
 xhr.open('GET', url, true)
 xhr.onload = function() {
     var datas = JSON.parse(xhr.responseText);
     if (xhr.readyState == 4 && xhr.status == "200") {
         console.table(datas);
     } else {
         console.error(datas);
     }
 }
 xhr.send(null);


 console.log("XMLHttpRequest RESTful POST");
 var url = 'https:jsonplaceholder.typicode.com/posts';
 var data = {
     id: 1000,
     title: 'title post',
     body: 'body post',
     userId: 100
 };
 var json = JSON.stringify(data);

 var xhr = new XMLHttpRequest();
 xhr.open("POST", url, true);
 xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
 xhr.onload = function() {
     var datas = JSON.parse(xhr.responseText);
     if (xhr.readyState == 4 && xhr.status == "201") {
         console.table(datas);
     } else {
         console.error(datas);
     }
 }
 xhr.send(json);


 console.log("XMLHttpRequest RESTful PUT");
 fetch('https:jsonplaceholder.typicode.com/posts/100', {
         method: 'PUT',
         body: JSON.stringify({
             id: 1,
             title: 'title put',
             body: 'body put',
             userId: 1,
         }),
         headers: {
             'Content-type': 'application/json; charset=UTF-8',
         },
     })
     .then((response) => response.json())
     .then((json) => console.log(json));

 var url = "https:jsonplaceholder.typicode.com/posts/1";

 var data = {
     id: 1,
     title: 'title put',
     body: 'body put',
     userId: 1,
 };
 var json = JSON.stringify(data);

 var xhr = new XMLHttpRequest();
 xhr.open("PUT", url, true);
 xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
 xhr.onload = function() {
     var users = JSON.parse(xhr.responseText);
     if (xhr.readyState == 4 && xhr.status == "200") {
         console.table(users);
     } else {
         console.error(users);
     }
 }
 xhr.send(json);


 console.log("XMLHttpRequest RESTful DELETE");
 var url = "https:jsonplaceholder.typicode.com/posts/1";
 var xhr = new XMLHttpRequest();
 xhr.open("DELETE", url, true);
 xhr.onload = function() {
     var datas = JSON.parse(xhr.responseText);
     if (xhr.readyState == 4 && xhr.status == "200") {
         console.table(datas);
     } else {
         console.error(datas);
     }
 }
 xhr.send(null);

 console.log("PROMISE");

 let promise = new Promise((resolve, reject) => {
     try {
         resolve(true)
     } catch (error) {
         reject(error)
     }
 })

 promise
     .then(
         function() {
             console.log('Successful!');
         }
     )
     .catch(
         function() {
             console.log('UnSuccessful!');
         }
     )
     .finally(
         function() {
             console.log('Finally!');
         }
     );

 promise
     .then(
         function() {
             console.log('1!');
         }
     )
     .then(
         function() {
             console.log('2!');
         }
     )
     .then(
         function() {
             console.log('3!');
         }
     )

 promise
     .then(
         function() {
             console.log(0);
             return 1;
         }
     )
     .then(
         function(data) {
             console.log(data);
             return 2;
         }
     )
     .then(
         function(data) {
             console.log(data);
         }
     )

 promise
     .then(
         function() {
             return new Promise(function(resolve) {
                 setTimeout(resolve, 3000);
             });
         }
     )
     .then(
         function(data) {
             console.log(data);
             return 2;
         }
     )
     .then(
         function(data) {
             console.log(data);
         }
     )

 console.log("FETCH");

 fetch('https:jsonplaceholder.typicode.com/posts/1')
     .then((response) => response.json())
     .then((json) => console.log(json))
     .catch(() => console.log('Có lỗi!'))


 fetch('https:jsonplaceholder.typicode.com/posts', {
         method: 'POST',
         body: JSON.stringify({
             title: 'foo',
             body: 'bar',
             userId: 1,
         }),
         headers: {
             'Content-type': 'application/json; charset=UTF-8',
         },
     })
     .then((response) => response.json())
     .then((json) => console.log(json));

 fetch('https:jsonplaceholder.typicode.com/posts/1', {
         method: 'PUT',
         body: JSON.stringify({
             id: 1,
             title: 'foo',
             body: 'bar',
             userId: 1,
         }),
         headers: {
             'Content-type': 'application/json; charset=UTF-8',
         },
     })
     .then((response) => response.json())
     .then((json) => console.log(json));

 fetch('https:jsonplaceholder.typicode.com/posts/1', {
     method: 'DELETE',
 });