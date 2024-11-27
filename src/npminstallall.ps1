$location = Get-Location
$directory = "$(Split-Path "$($location)" -Leaf)"
$folders = Get-ChildItem -Path $location -Directory 

Write-Host($directory)

foreach($folder in $folders) {  
    Set-Location $folder
    npm install
    Set-Location ..
    
}
npm install