$(document).ready(function(){


    var vm=new Vue({

    el:'#app',
    data:{
        message:'Clicked'
    },
    methods:{
        clickedButton:function(){
            console.log(this.$refs);
            this.$refs.myButton.innerText = this.message;
            //뷰에서는 $refs 속성을 이용해 DOM에 접근할 수 있습니다.
            //DOM조작 메서드 없이 엘리먼트 조작
            //리액트와 뷰는 가상 DOM을 사용하기 때문에
        }
    }

    })

})
