<template>
    <div class="message">
          <div class="form">
            <form action="" method="post">
                <h3>我要留言
                   <img @click="close" src="./../../static/img/close.svg" alt="">
                </h3>
                <div class="input">
                     <label>留言主题: </label>
                     <input type="text" v-cddv-input:nonvoid="{id:'theme',format:true,title:'*'}" name="theme" v-model="theme"></label>
                     <div v-cddv-msg:theme></div>  
                </div>
                <div class="input">
                     <label>联系人: </label>
                     <input type="text" v-cddv-input:reg="{id:'linkman',format:'RealName',title:'*'}" name="linkman" v-model="linkman">
                     <div v-cddv-msg:linkman></div>   
                </div>
                <div class="input">
                     <label>联系电话:</label>
                     <input type="text" v-cddv-input:reg="{id:'tell',format:'Mobile',title:'*'}" name="linkway" v-model="linkway">
                     <div v-cddv-msg:tell></div>  
                </div>
                <div class="input">
                <textarea cols="40" rows="5" name="content" v-model="content" placeholder="请输入留言内容"></textarea>
                 </div>
            </form>
            <div class="input">
                <input v-cddv-final-check @click="submit" class="submit submit-check-failed" type="submit" value="提交">
            </div>
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
            content: ''
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
    /*height: 66px;*/
    /*background: #FCFCFC;*/
    background-color: #dcc79f;
    line-height: 3rem;
    text-indent: 2rem;
    position: relative;
    color: #333;
    font-weight: normal;;
}
.form h3 img {
    width: 15px;
    position: absolute;
    right: 2rem;
    top: 0.8rem;
    cursor: pointer;
}
.form .input {
    width: 400px;
    margin: 0 auto;
}

.form .input label {
    display: inline-block;
    width: 70px;
    text-align: left;
    font-size: 0.8rem
}
.form input {
    width: calc(400px - 150px);
    width: -webkit-calc(400px - 150px);
    width: -o-calc(400px - 150px);
    width: -moz-calc(400px - 150px);
    height: 25px;
    margin: 0 auto;
    line-height: 25px;
    border: 1px solid #ccc;
    border-radius: 3px;
    margin-top: 1rem;
    text-indent: 0.2rem
}
textarea {
    /*margin: 1rem auto;*/
    display: block;
    margin-top: 1rem;
    font-size: 15px;
    border-radius: none;
    border:1px solid #ccc;
    border-radius: 0.5rem;
    padding: 0.5rem;
    width: calc(400px - 60px);
    width: -webkit-calc(400px - 60px);
    width: -o-calc(400px - 60px);
    width: -moz-calc(400px - 60px);
    outline: none
}
.submit {
    display: block;
    width: calc(400px - 45px) !important;
    width: -webkit-calc(400px - 10px) !important;
    width: -o-calc(400px - 10px) !important;
    width: -moz-calc(400px - 10px) !important;
    height: 30px !important;
    font-size: 15px !important;
    margin:0.5rem 0 0 0  !important;
    cursor: pointer;
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
