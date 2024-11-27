$location = Get-Location
$directory = "$(Split-Path "$($location)" -Leaf)"
$folders = Get-ChildItem -Path $location -Directory 


foreach($folder in $folders) {  
    Set-Location $folder

    
    if($folder -eq "node_modules") {
       Remove-Item -Force -Recurse $folder;
       Write-Host("$location got cleaned")
    } else {
       $node_exists = Test-Path -Path './node_modules'       
       
       if($node_exists) {
        $node_directory = Get-Item -Path './node_modules'
        Remove-Item -Force -Recurse @node_directory
        Write-Host("$folder got cleaned")
       } else {
        Write-Host("$folder was already cleaned")
       }
       
    }
   
    
    Set-Location ..
    
}