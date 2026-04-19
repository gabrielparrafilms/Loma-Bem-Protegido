$ErrorActionPreference = "Stop"
$ProgressPreference = 'SilentlyContinue'

$ffmpegUrl = "https://github.com/BtbN/FFmpeg-Builds/releases/download/latest/ffmpeg-master-latest-win64-gpl.zip"
$zipPath = "ffmpeg.zip"
$extractPath = "ffmpeg_temp"
$videoPath = "assets\video\Video Hero.mp4"
$framesDir = "assets\video-frames"

Write-Host "Baixando FFmpeg..."
Invoke-WebRequest -Uri $ffmpegUrl -OutFile $zipPath

Write-Host "Extraindo FFmpeg..."
Expand-Archive -Path $zipPath -DestinationPath $extractPath -Force

# Encontra o executável do ffmpeg
$ffmpegExe = Get-ChildItem -Path $extractPath -Recurse -Filter "ffmpeg.exe" | Select-Object -First 1

if (-not $ffmpegExe) {
    Write-Error "FFmpeg.exe não encontrado."
}

if (-not (Test-Path $framesDir)) {
    New-Item -ItemType Directory -Path $framesDir | Out-Null
} else {
    # Limpa a pasta se já existir
    Remove-Item -Path "$framesDir\*" -Recurse -Force
}

# Extrai os frames a 24 fps e qualidade reduzida (qscale) para otimizar para web
Write-Host "Extraindo frames de $videoPath para $framesDir..."
& $ffmpegExe.FullName -i $videoPath -vf "fps=24,scale=-1:1080" -qscale:v 3 "$framesDir\frame_%04d.webp"

Write-Host "Limpando arquivos temporários..."
Remove-Item -Path $zipPath -Force
Remove-Item -Path $extractPath -Recurse -Force

Write-Host "Contando frames extraídos..."
$frameCount = (Get-ChildItem -Path $framesDir -Filter "*.webp").Count
Write-Host "Total de $frameCount frames extraídos."
