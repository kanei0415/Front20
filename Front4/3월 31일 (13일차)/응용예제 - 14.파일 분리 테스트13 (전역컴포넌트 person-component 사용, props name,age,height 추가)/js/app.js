//전역 컴포넌트


$(document).ready(function() {

    Vue.component('person-component', {
        template: '<div>{{name}} {{age}} {{height}}</div>',
        props: ['name','age','height'],
    });

    var vm = new Vue({

        el: '#app',
        data: {
     
        },
   
    })

})

