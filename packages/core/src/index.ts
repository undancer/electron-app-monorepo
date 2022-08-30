import path from 'path'
import FfmpegCommand from 'fluent-ffmpeg'

const bootstrap = async () => {
  const input = path.join(__dirname, '../../../test/assets/test.avi')
  const command = FfmpegCommand(input)
  try {
    const ffprobe = await import('@ffprobe-installer/ffprobe')
    command.setFfprobePath(ffprobe.path)
  } catch (e) {
    console.log('error: 这个库在monorepo模式下工作不正常')
  }
  console.log('ffmpeg', input)
  command.ffprobe((err, data) => {
    console.log('ffprobe', err, data)
  })
}

console.log(bootstrap)
bootstrap()

export default bootstrap
