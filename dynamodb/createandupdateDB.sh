#!/usr/bin/env bash
set -ex


create_json_dynamodb(){
curl -X GET --header "Accept: application/json" "curl -X GET --header "Accept: application/json"  https://iws9pqk8ui.execute-api.us-east-1.amazonaws.com/v1/getcordinates?sitename=mohitapi" > input_charity.json 
json-dynamo-putrequest charity input_charity.json --beautify > output_charity.json
aws dynamodb batch-write-item --request-items file://output_charity.json
echo "Updated Charity DB Table"
}

main(){
create_json_dynamodb
}

main "$@"