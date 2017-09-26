var name = new Vue({
    el: '#name', //element
    data: {
        name: null,
        age: null,
        sex: null
    }
});

var vfor = new Vue({
    el: '#vfor',
    data: {
        // foodList:['葱','姜','蒜'],
        foodList: [{
                name: '葱',
                price: 10,
                discount: 0.9,
            },
            {
                name: '姜',
                price: 15,
                discount: 0.8,
            },
            {
                name: '蒜',
                price: 15,
            },
        ]
    }
});

var vbind = new Vue({
    el: '#vbind',
    data: {
        url: 'http://www.baidu.com',
        img: 'http://img.nga.cn/attachments/mon_201709/15/-jx594Q2h-3orKlToS3m-3m.png',
        isActive: true,
    }
});

var von = new Vue({
    el: '#von',
    methods: {
        onClick: function () {
            alert('666');
        },
        onEnter: function () {
            console.log('enter');
        },
        onOut: function () {
            console.log('out');
        },
        onSubmit: function () {
            // e.preventDefault();
            console.log('submitted');
        },
        onEnter: function () {
            // e.preventDefault();
            console.log('敲回车');
        },
    }
});

var compute = new Vue({
    el: '#compute',
    data: {
        math: 80,
        english: 100,
        physics: 70
    },
    computed: {
        sum: function () {
            // 如果有一栏为空则另两栏会变成字符串
            // return this.math + this.english + this.physics;
            var result=parseFloat(this.math) + parseFloat(this.english) + parseFloat(this.physics);
            if(!isNaN(result)){
                return result;
            }
            else{
                alert('不能为空');
            }
        },
        average: function () {
            return Math.round(this.sum / 3);
        }
    }
});

var alert_component= {
    template:'<button @click="onClick">alert</button>',
    methods:{
        onClick:function(){
            alert('alert');
        }
    }
};

new Vue({
    el:'#segment',
    components:{
        alert:alert_component,
    }
});