$ErrorActionPreference = "Stop"
$ProgressPreference = 'SilentlyContinue'

$ffmpegUrl = "https://github.com/BtbN/FFmpeg-Builds/releases/download/latest/ffmpeg-master-latest-win64-gpl.zip"
$zipPath = "ffmpeg.zip"
$extractPath = "ffmpeg_temp"
$videoPath = "assets\video\Video Hero V2.mp4"
$videoOutPath = "assets\video\Video Hero V2 GOP1.mp4"

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

# Converte o vídeo para GOP 1 (All-Intra) e adiciona FASTSTART
Write-Host "Recodificando vídeo V2 para All-Intra (GOP 1) com FASTSTART..."
& $ffmpegExe.FullName -i $videoPath -vcodec libx264 -g 1 -keyint_min 1 -movflags +faststart -pix_fmt yuv420p -an -qscale:v 3 $videoOutPath

Write-Host "Limpando arquivos temporários..."
Remove-Item -Path $zipPath -Force
Remove-Item -Path $extractPath -Recurse -Force

Write-Host "Concluído!"
