//User 모델과 스키마 생성
//스키마<모델
//스키마는 데이터베이스의 구조

const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 58
    },
    email:{
        type: String,
        trim: true,         //trim = space공백제거
        unique: 1           //중복금지
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {                //일반유저와 관리자를 구분
        type: Number,      //Number가 1이면 관리자, 0이면 일반유저
        default: 0
    },
    image: String,         //object{}를 사용하지 않고도 가능
    token: {
        type: String
    },
    tokenExp: {            //토큰유효기간
        type : Number
    }
})

//Schema를 model로 감싸기
//mongoose.model('모델이름','감쌀 스키마 이름')
const User = mongoose.model('User',userSchema)

//해당 model을 다른곳에서도 사용할 수 있게
module.exports = {User}