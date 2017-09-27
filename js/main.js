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
            console.log('data:',data);
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