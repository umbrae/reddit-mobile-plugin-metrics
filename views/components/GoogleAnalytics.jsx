/** @jsx React.DOM */

import * as React from 'react';

var GoogleAnalytics = React.createClass({
  render: function() {
    var propertyId = this.props.propertyId;

    var trackingCode = `
    <script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    ga('create', '${propertyId}', 'auto');
    ga('send', 'pageview');

    </script>
    `;

    return (
      <div dangerouslySetInnerHTML={{ __html: trackingCode }} />
    );
  }
});

function GoogleAnalyticsFactory(app) {
  return app.mutate('metrics/components/googleAnalytics', GoogleAnalytics);
}

export default GoogleAnalyticsFactory;