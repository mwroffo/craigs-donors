import boto3

dynamodb = boto3.resource('dynamodb', region_name='us-east-1')

table = dynamodb.create_table(
    TableName='charity',
    KeySchema=[
        {
            'AttributeName': 'orgID',
            'KeyType': 'HASH'  #Partition key
        },
        {
            'AttributeName': 'charityName',
            'KeyType': 'RANGE'  #Sort key
        }
        
    ],
    AttributeDefinitions=[
        {
            'AttributeName': 'orgID',
            'AttributeType': 'N'
        },
        {
            'AttributeName': 'charityName',
            'AttributeType': 'S'
        }
   ],
    ProvisionedThroughput={
        'ReadCapacityUnits': 10,
        'WriteCapacityUnits': 10
    }
)

print("Table status:", table.table_status)