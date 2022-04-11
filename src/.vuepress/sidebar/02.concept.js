const findTopic = require('./findTopic')

module.exports = [
        {
          title: 'Concept in IT Industry',
          collapsable: false,
          children: [
            {
              title: 'Principle',
              collapsable: false,
              children: findTopic('principle').children
            },
            {
              title: 'Architecture',
              collapsable: false,
              children: findTopic('Architecture').children
            },
            {
              title: 'Leadership',
              collapsable: false,
              children: findTopic('Leadership').children
            },
          ]
        }
      ]