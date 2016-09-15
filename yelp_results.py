from yelpapi import YelpAPI 
import pprint
import os

# keys and tokens set up in environ
consumer_key=os.environ['YELP_CONSUMER_KEY']
consumer_secret=os.environ['YELP_CONSUMER_SECRET']
token=os.environ['YELP_ACCESS_TOKEN_KEY']
token_secret=os.environ['YELP_ACCESS_TOKEN_SECRET']

yelp_api = YelpAPI(consumer_key, consumer_secret, token, token_secret)



def get_business_results(location, term, radius, offset):


    search_response = yelp_api.search_query(location=location,
                                            term=term,
                                            radius_filter=radius,
                                            limit=20,
                                            offset=offset,
                                            sort=1)

    # contain responses from yelp
    responses = []

    # iterate through 'businesses' response from yelp, if rating is equal to or greater than 3.5, append each value needed to
    # a key in a dictionary
    for business in search_response['businesses']:

        if business['rating'] >= 3.5:

            responses.append({'name': business['name'],
                            'location': business['location']['display_address'],
                            'latitude': business['location']['coordinate']['latitude'],
                            'longitude': business['location']['coordinate']['longitude'],
                            'rating': business['rating'],
                            'review_count': business['review_count'],
                            'url': business['url'],
                            'image' : business['image_url'].replace('/ms.jpg', '/l.jpg'),
                            'id' : business['id'],
                            'phone': business.get('display_phone')})

    return responses

def return_business_results(location, term, radius):
    """Query Yelp for three results within a radius of location"""


    first_twenty = get_business_results(location, term, radius, offset=0)
    second_twenty = get_business_results(location, term, radius, offset=20)

    responses = first_twenty + second_twenty

    pprint.pprint(responses)
    return responses[-3:]


