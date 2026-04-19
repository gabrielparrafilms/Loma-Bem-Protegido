$ErrorActionPreference = "Stop"
$ProgressPreference = 'SilentlyContinue'

$ffmpegUrl = "https://github.com/BtbN/FFmpeg-Builds/releases/download/latest/ffmpeg-master-latest-win64-gpl.zip"
$zipPath = "ffmpeg.zip"
$extractPath = "ffmpeg_temp"
$videoPath = "assets\video\Video Hero.mp4"
$videoOutPath = "assets\video\Video Hero GOP1.mp4"
$framesDir = "assets\video-frames"

Write-Host "Baixando FFmpeg..."
Invoke-WebRequest -Uri $ffmpegUrl -OutFile $zipPath

Write-Host "Extraindo FFmpeg..."
Expand-Archive -Path $zipPath -DestinationPath $extractPath -Force

$ffmpegExe = Get-ChildItem -Path $extractPath -Recurse -Filter "ffmpeg.exe" | Select-Object -First 1

if (-not $ffmpegExe) {
    Write-Error "FFmpeg.exe não encontrado."
}

if (Test-Path $videoOutPath) {
    Remove-Item -Path $videoOutPath -Force
}

# Converte o vídeo para GOP 1 (All-Intra) e remove o áudio (-an)
Write-Host "Recodificando vídeo para All-Intra (GOP 1)..."
& $ffmpegExe.FullName -i $videoPath -vcodec libx264 -g 1 -keyint_min 1 -an -qscale:v 3 $videoOutPath

Write-Host "Limpando arquivos temporários e frames antigos..."
Remove-Item -Path $zipPath -Force
Remove-Item -Path $extractPath -Recurse -Force
if (Test-Path $framesDir) {
    Remove-Item -Path $framesDir -Recurse -Force
}

Write-Host "Concluído!"
