(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[5512],{71552:function(e,t,a){"use strict";a.r(t),a.d(t,{_frontmatter:function(){return l},default:function(){return c}});var n=a(22122),s=a(19756),i=(a(15007),a(64983)),o=a(99536),r=["components"],l={},m={_frontmatter:l},d=o.Z;function c(e){var t=e.components,a=(0,s.Z)(e,r);return(0,i.mdx)(d,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"installation-and-varnish-tests"},"Installation and Varnish tests"),(0,i.mdx)("p",null,"The Installation and Varnish tests are automated EQP checks to ensure that the submitted extension version is compatible with the Magento versions and the editions that it claims to support."),(0,i.mdx)("h2",{id:"what-testing-is-for"},"What testing is for"),(0,i.mdx)("p",null,"Magento is a complex, highly extensible platform. To ensure that third-party extensions are production-ready, the Installation and Varnish tests verify successful installation with the extension included, ability to switch to ",(0,i.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/guides/v2.4/config-guide/bootstrap/magento-modes.html"},"production mode"),", and that the extension does not affect the caching mechanism for the most critical scenarios. The caching check ensures that the storefront provides a high performance customer experience."),(0,i.mdx)("h2",{id:"when-testing-is-done"},"When testing is done"),(0,i.mdx)("p",null,"All extension submissions must pass the mandatory Installation and Varnish tests, regardless of extension type and scope of changes. Only extensions that have passed these tests can be listed in the ",(0,i.mdx)("a",{parentName:"p",href:"https://marketplace.magento.com"},"Commerce Marketplace"),"."),(0,i.mdx)("h2",{id:"what-is-being-checked"},"What is being checked"),(0,i.mdx)("p",null,"The Installation and Varnish tests complete the following checks:"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},"Successful installation of Magento with the submitted extension and ability to switch to production mode–This check includes the following steps:"),(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"Verify ability to add the extension to the Magento project with ",(0,i.mdx)("a",{parentName:"li",href:"https://getcomposer.org"},"Composer"),"."),(0,i.mdx)("li",{parentName:"ul"},"After adding and enabling the extension, verify successful Magento installation."),(0,i.mdx)("li",{parentName:"ul"},"Verify that you can ",(0,i.mdx)("a",{parentName:"li",href:"https://devdocs.magento.com/guides/v2.4/config-guide/cli/config-cli-subcommands-compiler.html"},"compile code"),"."),(0,i.mdx)("li",{parentName:"ul"},"Verify that you can ",(0,i.mdx)("a",{parentName:"li",href:"https://devdocs.magento.com/guides/v2.4/config-guide/cli/config-cli-subcommands-static-view.html"},"deploy static content"),"."),(0,i.mdx)("li",{parentName:"ul"},"Verify that you can ",(0,i.mdx)("a",{parentName:"li",href:"https://devdocs.magento.com/guides/v2.4/config-guide/cli/config-cli-subcommands-mode.html"},"enable production mode"),"."),(0,i.mdx)("li",{parentName:"ul"},"Check that you can ",(0,i.mdx)("a",{parentName:"li",href:"https://devdocs.magento.com/guides/v2.4/config-guide/cli/config-cli-subcommands-index.html"},"reindex all data")," with the installed extension."))),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},"Check availability of critical pages and correct cache processing–This check includes the following steps:"),(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"Complete acceptance testing to validate that product and category pages are properly cached."),(0,i.mdx)("li",{parentName:"ul"},"Complete acceptance testing to validate that the product and category page cache is reset when a product is edited."),(0,i.mdx)("li",{parentName:"ul"},"Verify that different product types are validated.")))),(0,i.mdx)("h2",{id:"tools-and-environments-used"},"Tools and environments used"),(0,i.mdx)("p",null,"The Magento test infrastructure follows the recommended setup for the Magento installation. The Installation and Varnish tests always runs on the most up-to-date version of software compatible with the Magento release. You can use ",(0,i.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/cloud/docker/docker-development.html"},"Magento Cloud Docker")," to create a similar environment."),(0,i.mdx)("p",null,"The Installation and Varnish tests always use the latest patch version for the Magento release line that the submitted extension claims to support. For each supported release line, the entire test suite is performed on all compatible PHP versions."),(0,i.mdx)("h3",{id:"additional-configuration"},"Additional configuration"),(0,i.mdx)("p",null,"The Varnish test requires ",(0,i.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/guides/v2.4/config-guide/varnish/config-varnish-magento.html"},"Varnish as a caching application"),". The test checks for the presence of the ",(0,i.mdx)("strong",{parentName:"p"},"X-EQP-Cache")," HTTP header set by Varnish and analyzes its value on page loads. To complete this check, the following additional instruction must be added to the ",(0,i.mdx)("strong",{parentName:"p"},"vcl_deliver")," function:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-vcl"},'sub vcl_deliver {\n    if (resp.http.x-varnish ~ " ") {\n        set resp.http.X-EQP-Cache = "HIT";\n    } else {\n        set resp.http.X-EQP-Cache = "MISS";\n    }\n    ...\n}\n')),(0,i.mdx)("p",null,"The Varnish test also uses the ",(0,i.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/guides/v2.4/config-guide/cli/config-cli-subcommands-perf-data.html"},"setup:performance:generate-fixtures command")," to install sample products to run the test against:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},"magento setup:performance:generate-fixtures ./varnish-config/profile.xml\n")),(0,i.mdx)("blockquote",null,(0,i.mdx)("p",{parentName:"blockquote"},(0,i.mdx)("inlineCode",{parentName:"p"},"*./varnish-config/profile.xml* file")," contents")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0"?>\n<config xmlns:xi="http://www.w3.org/2001/XInclude">\n    <profile>\n        <admin_users>1</admin_users> \x3c!--  Number of admin users to generate --\x3e\n        <websites>1</websites> \x3c!--  Number of websites to generate --\x3e\n        <store_groups>1</store_groups> \x3c!--Number of stores--\x3e\n        <store_views>1</store_views> \x3c!--  Number of store views --\x3e\n        <assign_entities_to_all_websites>0</assign_entities_to_all_websites> \x3c!--  Whether to assign all products per each website --\x3e\n        <simple_products>10</simple_products> \x3c!--  Simple products count --\x3e\n        <categories>2</categories> \x3c!--  Number of categories to generate --\x3e\n        <configs> \x3c!--  Config variables and values --\x3e\n            <config>\n                <path>admin/security/use_form_key</path>\n                <scope>default</scope>\n                <scopeId>0</scopeId>\n                <value>0</value>\n            </config>\n            <config>\n                <path>system/full_page_cache/caching_application</path>\n                <scope>default</scope>\n                <scopeId>0</scopeId>\n                <value>2</value>\n            </config>\n        </configs>\n    </profile>\n</config>\n')),(0,i.mdx)("h3",{id:"varnish-test-execution"},"Varnish test execution"),(0,i.mdx)("p",null,"The Varnish test issues a series of requests, and then analyzes the value of the ",(0,i.mdx)("inlineCode",{parentName:"p"},"X-EQP-Cache")," HTTP header:"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},"Check the value of the ",(0,i.mdx)("inlineCode",{parentName:"li"},"X-EQP-Cache")," header by submitting the following series of requests two times to the same URL to verify the cache operation.",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"On the first set of requests against a fresh installation, the test verifies that each response returns the ",(0,i.mdx)("inlineCode",{parentName:"li"},"X-EQP-Cache")," header with the ",(0,i.mdx)("inlineCode",{parentName:"li"},"MISS")," value because the page has never been cached."),(0,i.mdx)("li",{parentName:"ul"},"On the second set of requests, the test verifies that each response returns the ",(0,i.mdx)("inlineCode",{parentName:"li"},"X-EQP-Cache")," header with the ",(0,i.mdx)("inlineCode",{parentName:"li"},"HIT")," value because the page was added to the cache after the initial request.",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},'GET "https://\\<magento-host',">",'/simple-product-1.html"'),(0,i.mdx)("li",{parentName:"ul"},'GET "https://\\<magento-host',">",'/simple-product-2.html"'),(0,i.mdx)("li",{parentName:"ul"},'GET "https://\\<magento-host',">",'/simple-product-3.html"'),(0,i.mdx)("li",{parentName:"ul"},'GET "https://\\<magento-host',">",'/category-1.html"'),(0,i.mdx)("li",{parentName:"ul"},'GET "https://\\<magento-host',">",'/category-2.html"'),(0,i.mdx)("li",{parentName:"ul"},'GET "https://\\<magento-host',">",'/"'))))),(0,i.mdx)("li",{parentName:"ol"},"After updating product prices, the test runs the following requests to verify that the FPC cache is cleared:",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},'PUT "https://\\<magento-host',">",'/rest/V1/products/product_dynamic_1" with ',(0,i.mdx)("inlineCode",{parentName:"li"},'{"product":{"price":"999.99"}}')),(0,i.mdx)("li",{parentName:"ul"},'PUT "https://\\<magento-host',">",'/rest/V1/products/product_dynamic_2" with ',(0,i.mdx)("inlineCode",{parentName:"li"},'{"product":{"price":"999.99"}}')),(0,i.mdx)("li",{parentName:"ul"},'PUT "https://\\<magento-host',">",'/rest/V1/products/product_dynamic_3" with ',(0,i.mdx)("inlineCode",{parentName:"li"},'{"product":{"price":"999.99"}}')))),(0,i.mdx)("li",{parentName:"ol"},"After the FPC cache has been cleared, verify the cache operation again by submitting the following series of requests two times to the same URL to verify the cache operation.",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"On the first set of requests, the test verifies that each response returns the ",(0,i.mdx)("inlineCode",{parentName:"li"},"X-EQP-Cache")," header with the ",(0,i.mdx)("inlineCode",{parentName:"li"},"MISS")," value because the cache was cleared and the page has not been cached yet."),(0,i.mdx)("li",{parentName:"ul"},"On the second set of requests, the test verifies that each response returns the ",(0,i.mdx)("inlineCode",{parentName:"li"},"X-EQP-Cache")," header with the ",(0,i.mdx)("inlineCode",{parentName:"li"},"HIT")," value because the page was added to the cache after the previous request.",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},'GET "https://\\<magento-host',">",'/simple-product-1.html"'),(0,i.mdx)("li",{parentName:"ul"},'GET "https://\\<magento-host',">",'/simple-product-2.html"'),(0,i.mdx)("li",{parentName:"ul"},'GET "https://\\<magento-host',">",'/simple-product-3.html"')))))),(0,i.mdx)("h2",{id:"reading-the-error-report"},"Reading the error report"),(0,i.mdx)("p",null,"The Installation test returns the logs of the Magento CLI commands. You can reproduce any error in the log by running the failed command in a local environment."),(0,i.mdx)("p",null,"The Varnish test provides the following information about failures:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"A brief description of the failed scenario"),(0,i.mdx)("li",{parentName:"ul"},"Expected and actual cache behavior (HIT or MISS for cached page)")),(0,i.mdx)("p",null,"To debug Varnish test errors, we recommend using a locally installed Magento version with the Varnish cache configured to submit requests and check the HTTP headers in the response."),(0,i.mdx)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,i.mdx)("p",null,"If the extension submission fails Installation and Varnish testing, and you cannot reproduce or troubleshoot the issues locally, ",(0,i.mdx)("a",{parentName:"p",href:"https://marketplacesupport.magento.com/hc/en-us"},"create a Support ticket")," to request assistance. Ensure that the relevant Submission ID is included on the ticket."),(0,i.mdx)("p",null,"We always welcome feedback and discussion on the ",(0,i.mdx)("a",{parentName:"p",href:"https://magentocommeng.slack.com/archives/C7SL5CGDN"},"Magento Community Engineering Slack")," #marketplace channel."))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-sellers-installation-and-varnish-tests-md-188793eaa2c44d1db640.js.map