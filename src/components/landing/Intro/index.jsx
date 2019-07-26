import React from 'react'
import { Header } from 'Theme'
import { Container } from 'Common'
import code from 'Static/illustrations/code-review.svg'
import { Wrapper, IntroWrapper, Details, Thumbnail, Links } from './styles'
import social from '../../theme/Footer/social.json'

export const Intro = () => (
	<Wrapper>
		<Header />
		<IntroWrapper as={Container}>
			<Details>
				<h1>&lt;Intro&gt;</h1>
				<h4>I’m Matt and I'm an aspiring Software Engineer</h4>
				<h1>&lt;/Intro&gt;</h1>
				<Links>
					{social.map(({ id, name, link, icon }) => (
						<a
							key={id}
							href={link}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={`follow me on ${icon}`}
						>
							<img width="48" src={icon} alt={name} />
						</a>
					))}
				</Links>
			</Details>
			<Thumbnail>
				<img src={code} alt="I’m Matt and I'm an aspiring Software Engineer" />
			</Thumbnail>
		</IntroWrapper>
	</Wrapper>
)
