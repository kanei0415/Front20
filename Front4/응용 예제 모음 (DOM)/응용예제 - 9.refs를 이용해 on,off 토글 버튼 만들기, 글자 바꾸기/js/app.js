$(document).ready(function(){

    var vm=new Vue({

    el:'#app',
    data:{
        toggle:false
    },
    methods:{
        clickedButton:function(){
            console.log(this.$refs);
            if(this.toggle==false){
                this.$refs.myButton.innerText = 'ON';
            } else{
                this.$refs.myButton.innerText = 'OFF';
            }
            this.toggle = !this.toggle;
            //뷰에서는 $refs 속성을 이용해 DOM에 접근할 수 있습니다.
        },
        changeTxt:function(){

            this.$refs.changeTxtBtn.innerText ='환영합니다.';
            this.$refs.changeTxtBtn.style.color='red'; 
        }
    }

    })

})
