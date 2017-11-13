exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE resorts RESTART IDENTITY')
  .then(function() {
    return Promise.all([
      knex.raw(
        'INSERT INTO resorts (id, name, snowstake_url, open_snow_id, created_at) VALUES (?, ?, ?, ?, ?)',
        [1, "Arapahoe Basin", "https://www.arapahoebasin.com/webcams/abasincam6000m.jpg", "2", new Date]
      ),
      knex.raw(
        'INSERT INTO resorts (id, name, snowstake_url, open_snow_id, created_at) VALUES (?, ?, ?, ?, ?)',
        [2, "Aspen Snowmass", "https://www.aspensnowmass.com/CamImages/Snow_Stake_Cam.jpg", "24", new Date]
      ),
      knex.raw(
        'INSERT INTO resorts (id, name, snowstake_url, open_snow_id, created_at) VALUES (?, ?, ?, ?, ?)',
        [3, "Beaver Creek", "http://common.snow.com/Mtncams/bcsnowstake.jpg", "5", new Date]
      ),
      knex.raw(
        'INSERT INTO resorts (id, name, snowstake_url, open_snow_id, created_at) VALUES (?, ?, ?, ?, ?)',
        [4, "Breckenridge", "http://common.snow.com/Mtncams/brecksnowstake.jpg", "6", new Date]
      ),
      knex.raw(
        'INSERT INTO resorts (id, name, snowstake_url, open_snow_id, created_at) VALUES (?, ?, ?, ?, ?)',
        [5, "Copper Mountain","https://b7b.hdrelay.com/cameras/fb469125-f1f3-459f-aeb4-98cb674e395f/GetOneShot?size=800x450&f=300000", "7", new Date]
      ),
      knex.raw(
        'INSERT INTO resorts (id, name, snowstake_url, open_snow_id, created_at) VALUES (?, ?, ?, ?, ?)',
        [6, "Crested Butte","http://skicb.server310.com/ftp/powcam/pow.jpg", "8", new Date]
      ),
      knex.raw(
        'INSERT INTO resorts (id, name, snowstake_url, open_snow_id, created_at) VALUES (?, ?, ?, ?, ?)',
        [7, "Keystone","http://common.snow.com/Mtncams/KeySnowStake.jpg", "3", new Date]
      ),
      knex.raw(
        'INSERT INTO resorts (id, name, snowstake_url, open_snow_id, created_at) VALUES (?, ?, ?, ?, ?)',
        [8, "Loveland","http://photosskiloveland.com/Report/15minutes/data.jpg", "1", new Date]
      ),
      knex.raw(
        'INSERT INTO resorts (id, name, snowstake_url, open_snow_id, created_at) VALUES (?, ?, ?, ?, ?)',
        [9, "Powderhorn", "http://www.powderhorn.com/cams/netcam1-000001.jpg", "12", new Date]
      ),
      knex.raw(
        'INSERT INTO resorts (id, name, snowstake_url, open_snow_id, created_at) VALUES (?, ?, ?, ?, ?)',
        [10, "Steamboat","https://b7b.hdrelay.com/cameras/e12dbfe2-9359-4b93-a8ce-b5e461b681d1/GetOneShot?size=1920x1080&f=300000", "13", new Date]
      ),
      knex.raw(
        'INSERT INTO resorts (id, name, snowstake_url, open_snow_id, created_at) VALUES (?, ?, ?, ?, ?)',
        [11, "Telluride","http://www.tellurideskiresort.com/webcams/powcam.jpg", "14", new Date]
      ),
      knex.raw(
        'INSERT INTO resorts (id, name, snowstake_url, open_snow_id, created_at) VALUES (?, ?, ?, ?, ?)',
        [12, "Vail","http://common.snow.com/Mtncams/vailsnowstake.jpg", "15", new Date]
      ),
      knex.raw(
        'INSERT INTO resorts (id, name, snowstake_url, open_snow_id, created_at) VALUES (?, ?, ?, ?, ?)',
        [13, "Winter Park","http://cams.winterparkresort.com/snow-stake-cam.jpg", "16", new Date]
      )
    ])
  })
}
