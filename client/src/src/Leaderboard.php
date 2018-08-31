<?php

class Fortnite_Leaderboard
{
	private $platforms = ['pc', 'xb1', 'ps4'];
	private $types = ['solo', 'duo', 'squad'];
	private $windows = ['top_1_wins', 'top_10_kills'];

	public function __construct($client)
	{
		$this->Client = $client;
	}

	/*
	 * Top 50 most wins
	 */
	public function top($type = 'solo', $platform = 'pc')
	{
		if(!in_array($type, $this->types))
		{
			return 'Please enter a match type.';
		}
		elseif(!in_array($platform, $this->platforms))
		{
			return 'Please enter a platform.';
		}
		else
		{
			return $this->fetch('top_1_wins', $type, $platform);
		}
	}

	/*
	 * Top 10 ordered by most kills (all platforms)
	 */
	public function kills()
	{
		return $this->fetch('top_10_kills');
	}

	/*
	 * Getting the data from Fortnite API.
	 */
	private function fetch($window = '', $type = '', $platform = '')
	{
		if(!in_array($window, $this->windows))
		{
			return 'Please enter a window.';
		}
		else
		{
			$return = json_decode($this->Client->httpCall('leaderboards/get', ['platform' => $platform, 'gamemode' => $type, 'window' => $window]));

			if(isset($return->error))
			{
				return $return->errorMessage;
			}
			else
			{
				return $return;
			}
		}
	}
}

?>