$location = Get-Location
$folders = Get-ChildItem -Exclude .\node_modules\ -Path $location -Directory 

foreach($folder in $folders) {
    $name = "$(Split-Path "$($folder)" -Leaf)"
    Set-Location $folder

    Try {
        $binFolder = Get-ChildItem -Path ".\bin" -Directory -ErrorAction Stop
        $nodeProject = Get-ChildItem -Path ".\node_modules" -Directory -ErrorAction Stop
        Write-Host("------ Cleaning: Project: $name ------")
      } Catch {
          Write-Host("------ Skipping: $name ------")
      }
  
      if($nodeProject -and $binFolder) {
        Remove-Item -Force -Recurse .\bin\
        Remove-Item -Force -Recurse .\obj\
        Get-ChildItem *.js,*.js.map,*.d.ts -Recurse | Where-Object {$_.FullName -notlike "*\node_modules\*"} | ForEach-Object { Remove-Item -Path $_.FullName }
      }

    Set-Location ..
}