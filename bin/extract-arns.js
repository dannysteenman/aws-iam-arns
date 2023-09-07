app = {};
EnvInfo = {};
_ = {
  has: function () { return false; },
  extend: function () { },
};
require('../var/policies.js');
let allArns = [];
let services = app["PolicyEditorConfig"]["serviceMap"];

for (let service in services) {
    let details = services[service];

    if (!details.ARNFormat) {
        continue;
    }

    allArns.push(`${service},${details.StringPrefix},\`${details.ARNFormat.replaceAll("^", "").replaceAll("<", "${").replaceAll(">", "}")}\``);
}

allArns.sort();
allArns.unshift('Service name, Service prefix name, ARN Format');
allArns.map(a => console.log(a));
