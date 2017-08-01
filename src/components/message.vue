<template>
    <div class="message">
          <div class="form">
            <form action="" method="post">
                <h3>我要留言
                   <img @click="close" src="./../../static/img/close.svg" alt="">
                </h3>
                <div class="input">
                     <label>留言主题&nbsp; <input type="text" v-cddv-input:nonvoid="{id:'theme',format:true,title:'*'}" name="theme" v-model="theme"></label>
                     <div v-cddv-msg:theme></div>  
                </div>
                <div class="input">
                     <label>联系人&nbsp;&nbsp;&nbsp;&nbsp; <input type="text" v-cddv-input:reg="{id:'linkman',format:'RealName',title:'*'}" name="linkman" v-model="linkman"></label>
                     <div v-cddv-msg:linkman></div>   
                </div>
                <div class="input">
                     <label>联系电话&nbsp; <input type="text" v-cddv-input:reg="{id:'tell',format:'Mobile',title:'*'}" name="linkway" v-model="linkway"></label>
                     <div v-cddv-msg:tell></div>  
                </div>
                <textarea cols="47" rows="10" name="content" v-model="content"></textarea>
            </form>
            <input v-cddv-final-check @click="submit" class="submit submit-check-failed" type="submit" value="提交">
        </div>  
    </div>
</template>

<script>
export default {
    data () {
        return {
            theme: '',
            linkman: '',
            linkway: '',
            content: '请输入留言内容，20-500个字符'
        }
    },
    methods:{
        close(){
            this.$emit('message',false)
        },
        submit(){
            var _this = this;
            $.ajax({
                type: 'POST',
                url: API+'addmessage',
                data: {
                    theme: _this.theme,
                    linkman: _this.linkman,
                    linkway: _this.linkway,
                    content: _this.content
                },
                success: function(data){
                    if(data.ok==200){
                        alert('提交成功');
                        _this.$emit('message',false)
                    }
                    else{
                        alert('提交失败');
                    }
                }
            })
        }
    }
}
</script>

<style scoped>
.cddv-msg-show {
    color:red;
    margin-top: 1rem;
    font-size: 13px;
}
.cddv-msg-hidden {
    display: none;
}
.submit-check-failed {
    display: none !important;
}
.message {
    background: transparent;
    width: 100%;
    height: 800px;
    padding-top: 10rem;
    position: fixed;
    z-index: 10000;
    top: 0;
}

.form {
    width: 600px;
    margin: 0 auto;
    background: #FFF;
    padding-bottom: 2rem;
}
.form h3 {
    height: 66px;
    background: #FCFCFC;
    line-height: 66px;
    text-indent: 2rem;
    position: relative;
}
.form h3 img {
    width: 25px;
    position: absolute;
    right: 2rem;
    top: 1.1rem;
}
.form .input {
    width: 400px;
    margin: 0 auto;
}
.form input {
    width: 80%;
    height: 30px;
    margin: 0 auto;
    border: 1px solid #ccc;
    border-radius: 3px;
    margin-top: 2rem;
}
textarea {
    margin: 2rem auto;
    display: block;
    font-size: 15px;
}
.submit {
    display: block;
    width: 66% !important;
    height: 40px !important;
    font-size: 15px !important;
}
.submit:hover {
    background: #CCC;
}
@media only screen and (max-width: 414px) {
    .message {
        padding-top: 0;
    }
    .form {
        width:100%;
        height: 800px;
    }
    .form .input{
        width: 100%;
        padding-left: 2.2rem;
    }
    .form input {
        width:60%;
    }
    textarea {
        width: 80%;
    }
    .submit {
        width:80% !important;
    }
}
</style>
