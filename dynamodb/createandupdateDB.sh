#!/usr/bin/env bash
set -ex


create_json_dynamodb(){
curl -X GET --header "Accept: application/json" "https://api.data.charitynavigator.org/v2/Organizations?app_id=186c7d3c&app_key=5b6f6b0f5897d612e3d21636f294404a&pageSize=10&pageNum=50&rated=true&fundraisingOrgs=true&sizeRange=1" > input_charity.json 
json-dynamo-putrequest charity input_charity.json --beautify > output_charity.json
aws dynamodb batch-write-item --request-items file://output_charity.json
echo "Updated Charity DB Table"
}

main(){
create_json_dynamodb
}

main "$@"