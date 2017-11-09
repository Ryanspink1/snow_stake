exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE resorts RESTART IDENTITY')
  .then(function() {
    return Promise.all([
      knex.raw(
        'INSERT INTO resorts (name, snowstake_url, open_snow_id, created_at) VALUES (?, ?, ?, ?)',
        ["Arapahoe Basin", "https://www.arapahoebasin.com/webcams/abasincam6000m.jpg", "2", new Date]
      ),
      knex.raw(
        'INSERT INTO resorts (name, snowstake_url, open_snow_id, created_at) VALUES (?, ?, ?, ?)',
        ["Aspen Snowmass", "https://www.aspensnowmass.com/CamImages/Snow_Stake_Cam.jpg", "24", new Date]
      ),
      knex.raw(
        'INSERT INTO resorts (name, snowstake_url, open_snow_id, created_at) VALUES (?, ?, ?, ?)',
        ["Beaver Creek", "http://common.snow.com/Mtncams/bcsnowstake.jpg", "5", new Date]
      ),
      knex.raw(
        'INSERT INTO resorts (name, snowstake_url, open_snow_id, created_at) VALUES (?, ?, ?, ?)',
        ["Breckenridge", "http://common.snow.com/Mtncams/brecksnowstake.jpg", "6", new Date]
      ),
      knex.raw(
        'INSERT INTO resorts (name, snowstake_url, open_snow_id, created_at) VALUES (?, ?, ?, ?)',
        ["Copper Mountain","https://b7b.hdrelay.com/cameras/fb469125-f1f3-459f-aeb4-98cb674e395f/GetOneShot?size=800x450&f=300000", "7", new Date]
      ),
      knex.raw(
        'INSERT INTO resorts (name, snowstake_url, open_snow_id, created_at) VALUES (?, ?, ?, ?)',
        ["Crested Butte","http://skicb.server310.com/ftp/powcam/pow.jpg", "8", new Date]
      ),
      knex.raw(
        'INSERT INTO resorts (name, snowstake_url, open_snow_id, created_at) VALUES (?, ?, ?, ?)',
        ["Keystone","http://common.snow.com/Mtncams/KeySnowStake.jpg", "3", new Date]
      ),
      knex.raw(
        'INSERT INTO resorts (name, snowstake_url, open_snow_id, created_at) VALUES (?, ?, ?, ?)',
        ["Loveland","http://photosskiloveland.com/Report/15minutes/data.jpg", "1", new Date]
      ),
      knex.raw(
        'INSERT INTO resorts (name, snowstake_url, open_snow_id, created_at) VALUES (?, ?, ?, ?)',
        ["Powderhorn", "http://www.powderhorn.com/cams/netcam1-000001.jpg", "12", new Date]
      ),
      knex.raw(
        'INSERT INTO resorts (name, snowstake_url, open_snow_id, created_at) VALUES (?, ?, ?, ?)',
        ["Steamboat","https://b7b.hdrelay.com/cameras/e12dbfe2-9359-4b93-a8ce-b5e461b681d1/GetOneShot?size=1920x1080&f=300000", "13", new Date]
      ),
      knex.raw(
        'INSERT INTO resorts (name, snowstake_url, open_snow_id, created_at) VALUES (?, ?, ?, ?)',
        ["Telluride","http://www.tellurideskiresort.com/webcams/powcam.jpg", "14", new Date]
      ),
      knex.raw(
        'INSERT INTO resorts (name, snowstake_url, open_snow_id, created_at) VALUES (?, ?, ?, ?)',
        ["Vail","http://common.snow.com/Mtncams/vailsnowstake.jpg", "15", new Date]
      ),
      knex.raw(
        'INSERT INTO resorts (name, snowstake_url, open_snow_id, created_at) VALUES (?, ?, ?, ?)',
        ["Winter Park","http://cams.winterparkresort.com/snow-stake-cam.jpg", "16", new Date]
      )
    ])
  })
}
