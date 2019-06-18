// @flow

import React from 'react'
import type { MilestoneMap, TrackId } from '../constants'

type Props = {
  milestoneByTrack: MilestoneMap,
  focusedTrackId: TrackId,
  setFocusedTrackIdFn: (Track) => void,
  tracks: Array<Track>,
  categoryColorScale: (String) => String
}

class TrackSelector extends React.Component<Props> {
  render() {
    const { tracks } = this.props;
    const trackIds = Object.keys(tracks);
    const categories = Object.values(tracks).map(track => { return track.category }).filter((category, index, self) => {return self.indexOf(category) === index});
    /// for now we assume the tracks are in-order of category
    const categoriesMap = Object.values(categories).map(category => {return {"category": category, "count": Object.values(tracks).reduce((count, track) =>
      {
        return track.category === category ? count+1 : count}
      , 0)}});


    return (
      <table>
        <style jsx>{`
          table {
            width: 100%;
            border-spacing: 3px;
            border-bottom: 2px solid #ccc;
            padding-bottom: 20px;
            margin-bottom: 20px;
            margin-left: -3px;
          }
          .track-selector-value {
            line-height: 50px;
            width: 50px;
            text-align: center;
            background: #eee;
            font-weight: bold;
            font-size: 24px;
            border-radius: 3px;
            cursor: pointer;
          }
          .track-selector-label {
            text-align: center;
            font-size: 9px;
          }
        `}</style>
        <tbody>
          <tr>
              {Object.values(categoriesMap).map(category => (
                  <td key={category.category} colSpan={category.count} className="track-selector-label"
                      style={{background: this.props.categoryColorScale(category.category)}}>
                    {category.category}
                  </td>
              ))}
          </tr>
          <tr>
            {trackIds.map(trackId => (
              <td key={trackId} className="track-selector-label" onClick={() => this.props.setFocusedTrackIdFn(tracks[trackId])}>
                {tracks[trackId].displayName}
              </td>
            ))}
          </tr>
          <tr>
            {trackIds.map(trackId => (
              <td key={trackId} className="track-selector-value"
                  style={{border: '4px solid ' + (trackId == this.props.focusedTrackId ? '#000': this.props.categoryColorScale(tracks[trackId].category)), background: this.props.categoryColorScale(tracks[trackId].category)}}
                  onClick={() => this.props.setFocusedTrackIdFn(tracks[trackId])}>
                {this.props.milestoneByTrack[trackId]}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    )
  }
}

export default TrackSelector
