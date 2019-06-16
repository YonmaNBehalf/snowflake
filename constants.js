// @flow
import * as d3 from 'd3'

import FULLSTACK_TRACKS from './track-definitions/fullstack';
import QUALITY_TRACKS from './track-definitions/qualityengineer';

import FULLSTACK_TARGET_ROLES from './target-roles/fullstack';
import QUALITY_TARGET_ROLES from './target-roles/qualityengineer';

export const milestones = [0, 1, 2, 3, 4, 5]

export const FULLSTACK_DOMAIN = 'Full Stack';
export const QUALITY_DOMAIN = 'Quality';

export const domains = [
  FULLSTACK_DOMAIN,
  QUALITY_DOMAIN,
];

export type Track = {
  displayName: string,
  category: string, // TK categoryId type?
  description: string,
  milestones: {
    summary: string,
    signals: string[],
    examples: string[]
  }[]
}

const allTracks = {
  [FULLSTACK_DOMAIN]: FULLSTACK_TRACKS,
  [QUALITY_DOMAIN]: QUALITY_TRACKS,
}

const targetRoles = {
  [FULLSTACK_DOMAIN]: FULLSTACK_TARGET_ROLES,
  [QUALITY_DOMAIN]: QUALITY_TARGET_ROLES,
}

export const getTracksForDomain = (domainId: DomainId) => allTracks[domainId] || FULLSTACK_TRACKS;

export const getTargetRolesForDomain = (domainId: DomainId) => targetRoles[domainId];

export const getCategoryIdsFromTracks = tracks => {
  const trackIds = Object.keys(tracks);

  return trackIds.reduce((set, trackId) => {
    set.add(tracks[trackId].category)
    return set
  }, new Set())
}

export const getCategoryColorScaleFromTracks = tracks => {
  const categoryIds = getCategoryIdsFromTracks(tracks);

  return d3.scaleOrdinal()
    .domain(categoryIds)
    .range(['#b7e1cd', '#fce8b2', '#f4c7c3', '#a4c2f4', '#b4a7d6'])
}
