import React from 'react'
import Helmet from 'react-helmet'
import Thumbnail from 'Static/thumbnail/thumbnail.png'
import {
  url,
  defaultDescription,
  defaultTitle,
  socialLinks,
  contact,
  legalName,
  foundingDate,
  logo,
} from 'Data'

export const SEO = ({
  title = defaultTitle,
  description = defaultDescription,
  location = '',
}) => {
  const structuredDataOrganization = `{ 
		"@context": "http://schema.org",
		"@type": "Organization",
		"legalName": "${legalName}",
		"url": "${url}",
		"logo": "${logo}",
		"foundingDate": "${foundingDate}",
		"founders": [{
			"@type": "Person",
			"name": "${legalName}"
		}],
		"contactPoint": [{
			"@type": "ContactPoint",
			"email": "${contact.email}",
			"telephone": "${contact.phone}",
			"contactType": "customer service"
		}],
		"sameAs": [
			"${socialLinks.linkedin}",
			"${socialLinks.github}"
		]
  	}`

  return (
    <Helmet>
      <meta name="description" content={description} />
      <meta name="image" content={Thumbnail} />
      <meta name="msvalidate.01" content="20E7C5847C45CE8904CD7825135A6888" />
      <meta
        property="og:url"
        content={`${url}${location}/?ref=mattmalone.dev`}
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={Thumbnail} />

      <script type="application/ld+json">{structuredDataOrganization}</script>
      <title>{title}</title>
      <html lang="en" dir="ltr" />
    </Helmet>
  )
}
