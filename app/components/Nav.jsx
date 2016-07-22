var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = (props) => {
    return (
        <div>
            <h2>Nav Component</h2>
            <IndexLink to="/" activeStyle={{color: 'green'}}>Get Weather</IndexLink>
            <Link to="/about" activeStyle={{color: 'green'}}>About</Link>
            <Link to="/examples" activeStyle={{color: 'green'}}>Examples</Link>
        </div>
    );
}

module.exports = Nav;