import test from 'ava'
import execa from 'execa'
test('pkgstat --help', async t => {
  const helpStdout = await execa('./pkgstat.js', ['--help'])
    // console.log(help_stdout);
  t.true(helpStdout.stdout.length > 0)
})
