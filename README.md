# aws-iam-arns

A list of all known Amazon Resource Names (ARNs) fetched from the AWS policy generator

# Why?

In the official documentation, you find a general reference guide on using ARNs, that’s helpful to a certain extent.
But when you want to apply permissions on AWS resources, then you need the prefix name of the AWS service and the ARN in order to deny or allow actions on it.

To my knowledge there is no reference or specification available that allows us to see which ARNs are available. Therefore we use the AWS IAM Poliocy generator to scrape the available ARNs.

# Generate and update the table

Requires curl, node, and jq.

Run `make update`; review the results.

The update works by reading JavaScript assets used by the AWS Policy Generator
<https://awspolicygen.s3.amazonaws.com/policygen.html>.  It's very much an
unsupported method though, so the update scripts might need updating from time
to time.

# View the complete ARN table

On my blog I've published the complete table that got generated using this script:

https://towardsthecloud.com/amazon-resource-names-arns

# License

Licensed under the Apache License, Version 2.0.  See the LICENSE file.

Original project (aws-iam-reference): https://github.com/rvedotrc/aws-iam-reference
