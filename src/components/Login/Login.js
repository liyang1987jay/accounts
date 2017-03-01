/**
 * @name Login
 * @description
 * @author liyang
 * @date 2017-03-01 13:49
 */
module.exports = {
  name: 'login',
  data () {
    return {
      winSize: {
        width: '',
        height: ''
      },
      formOffset: {
        position: 'absolute',
        left: '',
        top: ''
      },
      login_actions: {
        disabled: false
      },
      data: {
        username: '',
        password: ''
      },
      rule_data: {
        username: [{
          required: true,
          message: '用户名不能为空！',
          trigger: 'blur'
        }],
        password: [{
          required: true,
          message: '密码不能为空！',
          trigger: 'blur'
        }]
      }
    }
  },
  methods: {
    setSize () {
      this.winSize.width = document.documentElement.clientWidth + 'px'
      this.winSize.height = document.documentElement.clientHeight + 'px'

      this.formOffset.left = (parseInt(this.winSize.width) / 2 - 175) + 'px'
      this.formOffset.top = (parseInt(this.winSize.height) / 2 - 178) + 'px'
    },
    login (ref) {
      this.$refs[ref].validate((valid) => {
        if (valid) {
          if (this.data.username === 'admin' && this.data.password === '123456') {
            this.login_actions.disabled = true
          } else {
            this.$message.error('您输入的密码错误')
          }
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (ref) {
      this.$refs[ref].resetFields()
    }
  },
  created () {
    this.setSize()
    window.onresize = () => {
      this.setSize()
    }
  }
}
