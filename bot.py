    @property
    def config(self):
        with open('config.json') as f:
            config = json.load(f)
        config.update(os.environ)
        return config
    
    @property
    def token(self):
        '''Returns your token wherever it is'''
        return self.config.get('TOKEN')

    async def on_connect(self):
        print('---------------')
        print('Rage StatBot connected!')
        status = os.getenv('STATUS') or self.config.get('STATUS')
        if status:
            print(f'Setting Status to {status}')
            await self.change_presence(activity=discord.Game(status))
        else:
            print('No status set.')

    @property
    def guild_id(self):
        return int(self.config.get('GUILD_ID'))
    
    @property
    def guild(self):
        g = discord.utils.get(self.guilds, id=self.guild_id)
        return g
