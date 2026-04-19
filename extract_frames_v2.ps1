$ErrorActionPreference = "Stop"
$ProgressPreference = 'SilentlyContinue'

$ffmpegUrl = "https://github.com/BtbN/FFmpeg-Builds/releases/download/latest/ffmpeg-master-latest-win64-gpl.zip"
$zipPath = "ffmpeg.zip"
$extractPath = "ffmpeg_temp"
$videoPath = "assets\video\Video Hero V2.mp4"
$framesDir = "assets\video-frames-v2"

Write-Host "Baixando FFmpeg..."
Invoke-WebRequest -Uri $ffmpegUrl -OutFile $zipPath

Write-Host "Extraindo FFmpeg..."
Expand-Archive -Path $zipPath -DestinationPath $extractPath -Force

$ffmpegExe = Get-ChildItem -Path $extractPath -Recurse -Filter "ffmpeg.exe" | Select-Object -First 1

if (-not $ffmpegExe) {
    Write-Error "FFmpeg.exe não encontrado."
}

if (Test-Path $framesDir) {
    Remove-Item -Path $framesDir -Recurse -Force
}
New-Item -ItemType Directory -Path $framesDir | Out-Null

# Extrai frames a 20 FPS e escala para 720p (1280x720) para economizar drasticamente a RAM
Write-Host "Extraindo frames otimizados (720p, 20fps)..."
& $ffmpegExe.FullName -i $videoPath -vf "scale=-1:720,fps=20" -c:v libwebp -q:v 80 "$framesDir\frame_%04d.webp"

$frameCount = (Get-ChildItem -Path $framesDir -Filter "*.webp").Count
Write-Host "Extração concluída. Total de frames: $frameCount"

Write-Host "Limpando arquivos temporários..."
Remove-Item -Path $zipPath -Force
Remove-Item -Path $extractPath -Recurse -Force

Write-Host "Concluído!"
