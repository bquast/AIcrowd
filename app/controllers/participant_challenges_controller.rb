class ParticipantChallengesController < ApplicationController
  before_action :authenticate_participant!
  before_action :set_challenge, only: [:index,:approve,:deny]
  respond_to :html, :js

  def index
    @participant_challenges = @challenge
      .challenge_participants
      .where(challenge_rules_accepted_version: @challenge.current_challenge_rules_version)
      .order(name: :asc)
      .page(params[:page])
      .per(20)
    authorize @participant_challenges
  end

  private
  def set_challenge
    @challenge = Challenge.find(params[:challenge_id])
  end

end
