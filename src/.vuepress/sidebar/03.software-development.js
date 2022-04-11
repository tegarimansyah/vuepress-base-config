const findTopic = require('./findTopic')

module.exports = [
        {
          title: 'Software Development',
          collapsable: false,
          children: findTopic('software development').children
        }
      ]