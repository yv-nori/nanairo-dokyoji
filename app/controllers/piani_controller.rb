class PianiController < ApplicationController
  before_action :items
  before_action :recipe_items, only:[:eat_education,:support]
  before_action :name_items, only:[:about, :admission, :belong,  :eat_education, :event, :index, :features, :one_day, :photo_gallery]
  def about
    @items = {
      link_play: features_piani_index_path(:anchor => "play"),
      link_courtesy: features_piani_index_path(:anchor => "courtesy"),
      link_environment: features_piani_index_path(:anchor => "environment"),
      link_expression: features_piani_index_path(:anchor => "expression"),
      link_together: features_piani_index_path(:anchor => "together"),
      intro_text: '
        ピアニィと<span class="C_text__braces">は</span><br class="sp-only">「小さい<span class="C_text__braces">」</span>「かわいい<span class="C_text__braces">」</span>を意味します。<br>
        音楽の楽譜などで見るm<span class="C_text__braces">p</span>（メゾピアノ<span class="C_text__braces">）</span>やp<span class="C_text__braces">p</span>（ピアニシモ<span class="C_text__braces">）</span>という記号のpと同じです。<br>
        この名前には、ひとり一人の子ども達が音符のように大事な音を奏で、<br class="pc-tab-only">
        ひとり一人が無くてはならない存在であり、ちがう音符を互いに大切にすることで<br class="pc-tab-only">
        素晴らしいメロディ・ハーモニーになるとの思いが込められています。<br>
        子ども達ひとり一人が自分を音で表現し、その音を暖かく大切に見守り、<br class="pc-tab-only">
        そして子ども達が互いの音を認めあえる園でありたいという思いが込められています。',
      map_1F_length: 6,
      map_2F_length: 4,
      address: '〒597-0081　大阪府貝塚市麻生中626　TEL 072-493-1330',
      station: 'JR阪和線 東貝塚駅下車 徒歩10分',
      google_map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6581.560123323829!2d135.37183865904808!3d34.43234136876365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xca4652827cf45e9c!2z5LiD5b2p5a2m6IiOIOODlOOCouODi-OCo-mBk-aVmeWvug!5e0!3m2!1sja!2sjp!4v1618481720603!5m2!1sja!2sjp'
    }
    @map_items = [
      {title: '1階保育室1', photo: '1F_0'},
      {title: '1階保育室2', photo: '1F_1'},
      {title: '1階保育室3', photo: '1F_2'},
      {title: '1階保育室4', photo: '1F_3'},
      {title: '1階保育室5', photo: '1F_4'},
      {title: '1階保育室6', photo: '1F_5'},
      {title: '1階保育室7', photo: '1F_6'},
      {title: '2階保育室8', photo: '2F_0'},
      {title: '2階保育室9', photo: '2F_1'},
      {title: '2階保育室10', photo: '2F_2'},
      {title: '2階保育室11', photo: '2F_3'},
      {title: '2階保育室12', photo: '2F_4'},
      {title: '2階保育室13', photo: '2F_5'}
    ]
  end
  def admission
    @items = {
      movie_link: for_admission_piani_index_path(anchor: 'movie'),
      pdf_link: for_admission_piani_index_path,
      pdf_title: '令和2 年度 募集要<span class="C_text__braces">項</span>（PDF<span class="C_text__braces">）</span>',
      one_day_link: one_day_piani_index_path
    }
  end
  def eat_education
    @slider_items = {
      inner_title: false,
      back: false,
      title: 'Photo Gallery',
      img_source: 'eat-education/recipe',
      link: eat_education_piani_index_path,
      content_title: true,
      items: @recipe_items
    }
    @food_staff = [
      {
        shop_name: 'ミートショップ北出',
        representative: '北出　稔',
        text: '美味しいお肉を納入しております',
        delively: '三徳',
        postal_code: '〒597-0033',
        address: '大阪府　貝塚市　半田　1-3-15',
        tel: '072-427-5515',
        fax: '072-427-5515'
      },
      {
        shop_name: 'ミートショップ北出',
        representative: '北出　稔',
        text: '美味しいお肉を納入しております',
        delively: '三徳',
        postal_code: '〒597-0033',
        address: '大阪府　貝塚市　半田　1-3-15',
        tel: '072-427-5515',
        fax: '072-427-5515'
      },
      {
        shop_name: 'ミートショップ北出',
        representative: '北出　稔',
        text: '美味しいお肉を納入しております',
        delively: '三徳',
        postal_code: '〒597-0033',
        address: '大阪府　貝塚市　半田　1-3-15',
        tel: '072-427-5515',
        fax: '072-427-5515'
      }
    ]
  end
  def event
    @season = [
      {
        season_title_en: 'spring',
        season_title_ja: '春',
        season_items: [
          {
            month: '4',
            title: '入園式',
            photo2: ''
          },
          {
            month: '5',
            title: 'こどもの日',
            photo2: ''
          },
          {
            month: '5',
            title: '花まつり',
            photo2: 'ver',
            deco: ['heart1']
          },
          {
            month: '5',
            title: '遠足',
            photo2: '',
            deco: []
          },
          {
            month: '5',
            title: 'フェスティバル',
            photo2: 'hor',
            deco: ['triangle1','triangle2']
          },
        ]
      },
      {
        season_title_en: 'summer',
        season_title_ja: '夏',
        season_items: [
          {
            month: '5',
            title: '田植え',
            photo2: '',
            deco: []
          },
          {
            month: '5',
            title: '七夕会',
            photo2: 'hor',
            deco: ['star1','star2']
          },
          {
            month: '5',
            title: '水遊び',
            photo2: 'hor',
            deco: ['bubble1','bubble2']
          },
          {
            month: '5',
            title: 'キャンプ',
            photo2: '',
            deco: []
          }
        ]
      },
      {
        season_title_en: 'autumn',
        season_title_ja: '秋',
        season_items: [
          {
            month: '5',
            title: '縁日ごっこ',
            photo2: '',
            deco: []
          },
          {
            month: '5',
            title: '敬老会',
            photo2: 'ver',
            deco: ['triangle1','triangle2']
          },
          {
            month: '5',
            title: '秋のつどい',
            photo2: '',
            deco: []
          },
          {
            month: '5',
            title: 'お店屋さんごっこ',
            photo2: '',
            deco: []
          },
          {
            month: '5',
            title: 'お芋掘り',
            photo2: 'hor',
            deco: ['heart1','heart2']
          },
          {
            month: '5',
            title: '遠足',
            photo2: '',
            deco: []
          },
          {
            month: '5',
            title: '遠足',
            photo2: 'ver',
            deco: ['star1','star2']
          },
          {
            month: '5',
            title: '報恩講',
            photo2: '',
            deco: []
          },
          {
            month: '5',
            title: '親子バイキング',
            photo2: 'hor',
            deco: ['bubble']
          }
        ]
      },
      {
        season_title_en: 'winter',
        season_title_ja: '冬',
        season_items: [
          {
            month: '5',
            title: 'お餅つき',
            photo2: 'hor',
            deco: ['triangle1','triangle2']
          },
          {
            month: '5',
            title: '成道会',
            photo2: '',
            deco: []
          },
          {
            month: '5',
            title: '発表会',
            photo2: 'hor',
            deco: ['music-note1','music-note2']
          },
          {
            month: '5',
            title: '節分',
            photo2: '',
            deco: []
          },
          {
            month: '5',
            title: '涅槃会',
            photo2: '',
            deco: []
          },
          {
            month: '5',
            title: 'お茶会',
            photo2: 'hor',
            deco: ['star1','star2']
          },
          {
            month: '3',
            title: 'ひな祭り',
            photo2: '',
            deco: []
          },
          {
            month: '5',
            title: '卒園式',
            photo2: '',
            deco: []
          }
        ]
      },
    ]
  end
  def one_day
    @items = [
      {
        time: '7:00',
        title: '順次登園',
        class: '',
        text: '一人ひとりの<br>
                その日の体調を診た後<br>
                好きな遊びをします'
      },
      {
        time: '9:30',
        title: '朝の集い',
        class: 'toddler',
        text: '朝の歌を歌い<br>
              一日の流れを聞きます'
      },
      {
        time: '9:30',
        title: '保育士と遊ぶ',
        class: 'infant',
        text: 'お天気のよい日は戸外へ<br>
                室内ではわらべうたや<br>
                絵本などを楽しみます'
      },
      {
        time: '10:00',
        title: '体操',
        class: 'toddler',
        text: '園庭に出て体操をします'
      },
      {
        time: '10:30',
        title: 'クラス活動',
        class: 'toddler',
        text: '製作やリズム遊びをして<br>
                楽しく学びます'
      },
      {
        time: '11:15',
        title: '給食',
        class: 'infant',
        text: '保育教諭の援助のもと<br>
                楽しく食事をします'
      },
      {
        time: '11:45',
        title: '給食',
        class: 'toddler',
        text: '好き嫌いを無くし<br>
                食事のマナーを<br>
                身に付けます'
      },
      {
        time: '13:30',
        title: 'クラスでの活動',
        class: 'toddler',
        text: '各クラス楽しく学びます'
      },
      {
        time: '12:30',
        title: '午睡',
        class: 'infant',
        text: '静かな環境の中で<br>
                お昼寝をします'
      },
      {
        time: '14:30',
        title: '午睡',
        class: '',
        text: 'みんなで仲良く<br>
                おやつを食べます'
      },
      {
        time: '16:30',
        title: '順次降園',
        class: '',
        text: '荷物の整理整頓をします'
      },
      {
        time: '19:00',
        title: '延長保育',
        class: '',
        text: '合同保育をしながら<br>
                お迎えを待ちます'
      }
    ]
  end
  def index
    @links = {
      about: about_piani_index_path,
      event: event_piani_index_path,
      eat_education: eat_education_piani_index_path,
      vision: vision_piani_index_path,
      belong: belong_piani_index_path,
      admission: admission_piani_index_path,
      access: about_piani_index_path(:anchor => "access"),
      map: about_piani_index_path(:anchor => "map"),
      info: about_piani_index_path(:anchor => "map"),
      recruit: recruit_piani_index_path,
      support: support_piani_index_path,
      for_admission: for_admission_piani_index_path
    }
    @slider_items = {
      inner_title: true,
      back: true,
      title: 'Photo Gallery',
      img_source: 'photo-gallery/piani_slider',
      link: photo_gallery_piani_index_path,
      content_title: false,
      items: [
        { link: photo_gallery_piani_index_path },
        { link: photo_gallery_piani_index_path },
        { link: photo_gallery_piani_index_path },
        { link: photo_gallery_piani_index_path },
        { link: photo_gallery_piani_index_path },
        { link: photo_gallery_piani_index_path }
      ]
    }
  end
  def support
    @items = {
      title: 'ピアルーム',
      title_en: 'PIAROOM',
      age: '0、1、2歳児（20組限定）',
      date: '毎月第2・4木曜日　13時30分より',
      span: '5月～2月末まで',
      cost: '1回　200円',
      local: 'ピアニィ道教寺',
      request: 'ピアニィ道教寺にて随時受付中'
    }
    @slider_items = {
      inner_title: false,
      back: false,
      title: 'Photo Gallery',
      img_source: 'eat-education__recipe',
      link: eat_education_piani_index_path,
      content_title: true,
      items: @recipe_items
    }
  end
  def recruit
    @contact_recruit = ContactRecruit.new()
    @staff_0 = [
      name:'上村　和美',
      name_en:'kitano saori',
      joined_date:'平成20年4月',
      work_style:'正規・常勤',
      license:'栄養士・調理師',
      catch_copy:'美味しい給食で子どもたちに笑顔を',
      catch_sentense:'子どもたちにおいしい給食を子どもたちにおいしい給食を子どもたちにおいしい給食を子どもたちにおいしい給食を子どもたちにおいしい給食を子どもたちにおいしい給食を',
      holiday:'たのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしている',
      favorite:'たのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしている',
      card_position:'right',
      js_id:'0'
    ]
    @staff_img_0 = ['piani','0']
    @staff_catch_0 ='仕事も家族も'
    @staff_1 = [
      name:'篠原　明美',
      name_en:'kitano saori',
      joined_date:'平成20年4月',
      work_style:'正規・常勤',
      license:'栄養士・調理師',
      catch_copy:'美味しい給食で子どもたちに笑顔を',
      catch_sentense:'子どもたちにおいしい給食を子どもたちにおいしい給食を子どもたちにおいしい給食を子どもたちにおいしい給食を子どもたちにおいしい給食を子どもたちにおいしい給食を',
      holiday:'たのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしている',
      favorite:'たのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしている',
      card_position:'right',
      js_id:'1'
    ]
    @staff_img_1 = ['piani','1']
    @staff_catch_1 ='ひとりひとりの<br>子どもを大切に'
    @staff_2 = [
      name:'名前　名前',
      name_en:'kitano saori',
      joined_date:'平成20年4月',
      work_style:'正規・常勤',
      license:'栄養士・調理師',
      catch_copy:'美味しい給食で子どもたちに笑顔を',
      catch_sentense:'子どもたちにおいしい給食を子どもたちにおいしい給食を子どもたちにおいしい給食を子どもたちにおいしい給食を子どもたちにおいしい給食を子どもたちにおいしい給食を',
      holiday:'たのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしている',
      favorite:'たのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしている',
      card_position:'left',
      js_id:'2'
    ]
    @staff_img_2 = ['piani','2']
    @staff_catch_2 ='言葉を手渡す'
    @staff_3 = [
      name:'北野　沙織',
      name_en:'kitano saori',
      joined_date:'平成20年4月',
      work_style:'正規・常勤',
      license:'栄養士・調理師',
      catch_copy:'美味しい給食で子どもたちに笑顔を',
      catch_sentense:'子どもたちにおいしい給食を子どもたちにおいしい給食を子どもたちにおいしい給食を子どもたちにおいしい給食を子どもたちにおいしい給食を子どもたちにおいしい給食を',
      holiday:'たのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしている',
      favorite:'たのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしているたのしく過ごしている',
      card_position:'left',
      js_id:'3'
    ]
    @staff_img_3 = ['piani','3']
    @staff_catch_3 ='優しさをもって'
  end

  def recruit_create
    @contact_recruit = ContactRecruit.new(contact_recruit_params)
    if @contact_recruit.save
      redirect_to recruit_piani_index_path, notice: "送信が完了しました。"
      ContactMailer.contact_mail(@contact_recruit).deliver_now
    else
      flash.now[:alert] = '送信に失敗しました。'
      render :recruit
    end
  end

  def name_items
    @name_items = { 
      name_en: 'piani',
      name_en_L: 'Piani',
      name_ja: 'ピアニィ'
    }
  end

  def recipe_items
    @recipe_items = [
      {
        link: 'https://www.youtube.com/watch?v=cC5JR5ObdPA',
        title: '麻婆ナス'
      },
      {
        link: 'https://www.youtube.com/watch?v=cC5JR5ObdPA',
        title: '麻婆ナス'
      },
      {
        link: 'https://www.youtube.com/watch?v=cC5JR5ObdPA',
        title: '麻婆ナス'
      },
      {
        link: 'https://www.youtube.com/watch?v=cC5JR5ObdPA',
        title: '麻婆ナス'
      },
      {
        link: 'https://www.youtube.com/watch?v=cC5JR5ObdPA',
        title: '麻婆ナス'
      },
      {
        link: 'https://www.youtube.com/watch?v=cC5JR5ObdPA',
        title: '麻婆ナス'
      },
    ]
  end

  def items
    @header_items = {
      logo: 'logo-image-piani',
      logo_path: piani_index_path
    }
    @header_lists = [
      {title: '当園について',link: about_piani_index_path},
      {title: '特色',link: features_piani_index_path(anchor: 'play')},
      {title: '年間行事',link: event_piani_index_path},
      {title: '食育',link: eat_education_piani_index_path},
      {title: 'ギャラリー',link: photo_gallery_piani_index_path},
      {title: '理念',link: vision_piani_index_path},
      {title: '入園希望の方へ',link: admission_piani_index_path},
      {title: '就職希望の方へ',link: recruit_piani_index_path},
      {title: '在園の方へ',link: belong_piani_index_path},
    ]
    @footer_item = {logo: 'logo-piani'}
    @footer_lists = [
      {title: '七彩学舎',link: root_path},
      {title: 'パルティ道教寺',link: parti_index_path},
      {title: 'お問い合わせ',link: contact_nanairo_index_path},
      {title: '個人情報保護',link: privacy_nanairo_index_path},
      {title: 'サイトポリシー',link: policy_nanairo_index_path}
    ]
    @footer_texts = {
      address: '〒597-0081　大阪府貝塚市麻生中626',
      tel: 'TEL 072-493-1330 FAX 072-493-1331',
    }
  end

  private

  def contact_recruit_params
    params.require(:contact_recruit).permit(:name, :name_kana, :tel, :email, :email_confirmation, :postal_code, :address, :question)
  end
end
