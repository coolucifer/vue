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
            var result = parseFloat(this.math) + parseFloat(this.english) + parseFloat(this.physics);
            if (!isNaN(result)) {
                return result;
            } else {
                alert('不能为空');
            }
        },
        average: function () {
            return Math.round(this.sum / 3);
        }
    }
});

var alert_component = {
    template: '<button @click="onClick">alert</button>',
    methods: {
        onClick: function () {
            alert('alert');
        }
    }
};

new Vue({
    el: '#segment',
    components: {
        alert: alert_component,
    }
});

// ---------------父子通信------------------

Vue.component('like', {
    template: '<button :class="{liked:liked}" @click="toggle_like">赞{{like_count}}</button>',
    data: function () {
        return {
            like_count: 10,
            liked: false
        };
    },
    methods: {
        toggle_like: function () {
            if (!this.liked) {
                this.like_count++;
            } else {
                this.like_count--;
            }
            this.liked = !this.liked;
        }
    }
})

new Vue({
    el: '#likeit',
})

Vue.component('user', {
    template: '<a :href="\'user/\'+username">@{{username}}</a>',
    props: ['username'],
    methods: {}
})

new Vue({
    el: '#users'
})

// ----------------子父通信----------------

Vue.component('balance', {
    template: `<div>
    <show @show-balance="show_balance"></show>
    <div v-if="show">
    您的余额不足
    </div>
    </div>`,
    methods: {
        show_balance: function (data) {
            this.show = true;
            console.log('data:', data);
        }
    },
    data: function () {
        return {
            show: false,
        };
    }
});
Vue.component('show', {
    template: '<button @click="onClick()">显示余额</button>',
    methods: {
        onClick: function () {
            this.$emit('show-balance', {
                a: 1,
                b: 2
            });
        }
    }
})
new Vue({
    el: '#balance'
})

// -----------平行组件通信------------
var Event = new Vue();

Vue.component('huahua', {
    template: `<div>
    我说:<input @keyup="on_change" v-model="i_said"/>
    </div>`,
    methods: {
        on_change: function () {
            Event.$emit('huahua-said', this.i_said);
        }
    },
    data: function () {
        return {
            i_said: '',
        };
    },
})
Vue.component('shuandan', {
    template: `<div>花花说:{{huahua_said}}</div>`,
    data: function () {
        return {
            huahua_said: '',
        };
    },
    mounted: function () {
        me = this;
        Event.$on('huahua-said', function (data) {
            me.huahua_said = data;
        })
    }
})

new Vue({
    el: '#connect',
})

// ----------------filter-------------
Vue.filter('currency', function (val, unit) {
    val = val || 0;
    unit = unit || '元';
    return val + unit;
})

Vue.filter('meter', function (val, unit) {
    val = val || 0;
    unit = unit || 'm';
    return (val / 1000).toFixed(2) + unit;
})

new Vue({
    el: '#filt',
    data: {
        price: 10,
        length: 10
    }
})

//-----------custom-directive-------------
Vue.directive('pin', function(el,binding){    //binding传递指令的值和基本信息
    var pinned=binding.value;
    var position=binding.modifiers;
    var warning=binding.arg;

    if(pinned){
        el.style.position='fixed';

        for(var key in position){
            if(position[key]){
                el.style[key]='10px';
            }
        }
        if(warning==='true'){
            el.style.background='yellow';
        }
    }else{
        el.style.position='static';
        el.style.background='#ccc';
    }
})

new Vue({
    el:'#pin',
    data:{
        card1:{
            pinned:false,
        },
        card2:{
            pinned:false,
        },
        card3:{
            pinned:false,
        },
    }
})