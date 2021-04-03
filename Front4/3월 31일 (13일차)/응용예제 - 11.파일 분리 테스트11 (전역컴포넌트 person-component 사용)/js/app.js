//전역 컴포넌트


$(document).ready(function() {

    Vue.component('person-component', {
        template: '<div>Person컴포넌트</div>'
    
    });

    var vm = new Vue({

        el: '#app',
        data: {
     
        },
   
    })

})

