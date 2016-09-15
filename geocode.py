import os
from mapbox import Geocoder


MB_ACCESS_TOKEN = os.environ['MAPBOX_ACCESS_TOKEN']
geocoder = Geocoder(access_token=MB_ACCESS_TOKEN)


def geocode_location(location):
    """Geocodes origin and returns city, lat, lon."""

    # Forward geocoding with proximity so results are biased toward given lng/lat
    response = geocoder.forward(location, lon=-122.431, lat=37.773)
    
    if response.status_code == 200:
        
        first = response.geojson()['features'][0]
        
        city = (first['context'][1]['text']).encode('ascii','ignore')
        origin_lng = first['geometry']['coordinates'][0]
        origin_lat = first['geometry']['coordinates'][1]

        return city, origin_lat, origin_lng

    else:
        pass
        # Add error message