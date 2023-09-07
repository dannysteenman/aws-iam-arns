.PHONY: update

all-arns.csv: var/policies.js bin/extract-arns.js
	node bin/extract-arns.js > $@.tmp && mv $@.tmp $@

var/policies.js:
	mkdir -p var
	curl -o $@.tmp https://awspolicygen.s3.amazonaws.com/js/policies.js && mv $@.tmp $@

update:
	rm -f var/policies.js
	$(MAKE)
