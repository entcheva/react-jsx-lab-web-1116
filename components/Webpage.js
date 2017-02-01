const React = require('react')
const FillerText = require('./FillerText')


class Webpage extends React.Component {
  render() {
    return (
      React.createElement('Webpage', {}, [
        React.createElement('title', {}, 'The world\'s coolest webpage')
        < FillerText />
        < FillerText />
      ])
    )
  }
}


module.exports = Webpage
