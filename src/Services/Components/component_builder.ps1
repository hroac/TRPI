# Prompt the user to input values for component, entity, and action
$component = Read-Host "Enter value for component"
$entity = Read-Host "Enter value for entity"
$action = Read-Host "Enter value for action"

# Define an empty hashtable to store key-value pairs
$keyValueObject = @{}

# Add key-value pairs to the hashtable
$keyValueObject["component"] = $component
$keyValueObject["entity"] = $entity
$keyValueObject["action"] = $action

# Convert the hashtable to a JSON string
$jsonString = $keyValueObject | ConvertTo-Json
$jsonString = $jsonString.Replace('"', '\"')
$componentBuilder = 'index.js'

node $componentBuilder $jsonString