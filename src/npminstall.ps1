$location = Get-Location
$directory = "$(Split-Path "$($location)" -Leaf)"
$folders = Get-ChildItem -Path $location -Directory 

Write-Host($directory)

$package = Read-Host "Enter the package you want to install"
$version = Read-Host "What version?"
foreach($folder in $folders) {
    $name = "$(Split-Path "$($folder)" -Leaf)"
    $nodeProject = $null;
    $oldPackage = $null;
    
    Set-Location $folder
    

    Try {
       $nodeProject = Get-ChildItem -Path ".\node_modules" -Directory -ErrorAction Stop
    } Catch {
        Write-Host("$name does not contain a .\node_modules folder")
    }

    
    if($nodeProject) {
        Try {
            $oldPackage =  Get-ChildItem -Path ".\node_modules\$package" -Directory -ErrorAction Stop
        }
        Catch {
            Write-Host("Adding new package $name")
        }

        if($oldPackage) {
            #Remove-Item -Force -Recurse .\node_modules\$package
            npm uninstall $package
            npm install --save "$package@$version"
            Write-Host("installed $package@$version")

        }
        
    }
    Set-Location ..
    
}