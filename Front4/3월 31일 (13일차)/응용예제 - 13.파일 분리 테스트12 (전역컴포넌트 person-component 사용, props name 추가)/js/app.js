//전역 컴포넌트


$(document).ready(function() {

    Vue.component('person-component', {
        template: '<div>{{name}}</div>',
        props: ['name'],
    });

    var vm = new Vue({

        el: '#app',
        data: {
     
        },
   
    })

})

